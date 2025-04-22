import "./EditEvent.scss";
import addImgIcon from "/aafcl-addImgIcon.png";
import Xmark from "../../svgs/Xmark";
import deleteIcon from "/delete.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {

  const [images, setImages] = useState([]);
  const { routeId } = useParams();
 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
          let isMounted = true;
          setLoading(true);
  
          (async () => {
              try {
                  const res = await fetch("http://localhost:5000/api/events");
                  const data = await res.json();
                  const selectedEvent = data.find((ev) => parseInt(ev._id) === parseInt(routeId));
  
                  if (isMounted) {
                      setEvent(selectedEvent || {});
                      setInputs(selectedEvent.texts);
                      setLoading(false);
                  }
              } catch (error) {
                  console.error("Error fetching events:", error);
              }
          })();
  
          return () => { isMounted = false };
      }, [routeId]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const removeImg = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

 
  console.log(inputs)
  console.log(event)

  const addText = () => {
    setInputs([...inputs, ""]);
  };

  const removeText = (indexToRemove) => {
    setInputs(inputs.filter((_, index) => index !== indexToRemove));
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  if (loading) {
    return (
      <div>
        <p> Etkinlik Detayı Yükleniyor </p>
      </div>
    )
  }
  return (
    <div className="add-event-container">
      <div className="add-event-form-title-container">
        <div className="add-event-title-container">
          <h4 className="add-event-title">
            Etkinlik Düzenle
          </h4>
        </div>
        <form className="add-event-inputs-form">
          <div className="add-event-input-container">
            <label className="input-title" htmlFor="title" >
              Etkinlik Başlığı
            </label>
            <input type="text" value={event.title} className="add-event-input" />
          </div>

          <div className="add-event-input-container">
            {inputs.map((value, index) => (
              <div className="add-event-input-container" style={{ position: "relative", }} key={index}>
                <label className="input-title" htmlFor={`title-${index}`}>
                  Etkinlik Açıklaması - {index + 1}
                </label>
                <input
                  type="text"
                  className="add-event-input"
                  id={`title-${index}`}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                {index > 0 && (
                  <div
                    className="add-text-xmark-container"
                    onClick={() => removeText(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <Xmark fill={"black"} width={30} height={30} />
                  </div>
                )}
              </div>
            ))}

            <button onClick={addText} className="add-text-button"> Paragraf Ekle </button>
          </div>

          <div className="add-event-input-container">
            <p className="input-title"> Etkinlik Resimleri </p>
            <label htmlFor="imageUpload" className="custom-file-upload">
              <div className="add-img-button-container">
                <img src={addImgIcon} alt="" className="add-ımg-ıcon" />
                <p className="add-img-p">
                  Görsel Seç
                </p>
              </div>
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            <div className="image-preview-container">
              {images.map((img, index) => (
                <div key={index} className="event-img-icon-container">
                  <img src={img} alt={`Preview ${index}`} className="add-event-image" />
                  <img src={deleteIcon} alt="" onClick={() => removeImg(index)} className="event-delete-img-icon" />
                </div>
              ))}
            </div>
          </div>

          <div className="event-save-button-container">
            <button type="submit" className="event-save-button"> Kaydet </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEvent;
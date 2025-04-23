import "./EditEvent.scss";
import addImgIcon from "/aafcl-addImgIcon.png";
import Xmark from "../../svgs/Xmark";
import deleteIcon from "/delete.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {

  const [images, setImages] = useState([]); 
  const [deletedImages, setDeletedImages] = useState([]);  
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
          setImages(selectedEvent.imgs.map((urlObj) => ({
            url: urlObj.url,
            public_id: urlObj.public_id,
          })));          
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    })();

    return () => { isMounted = false };
  }, [routeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    images.forEach((image) => {
      if (image.file) {
        formData.append("images", image.file);  
        console.log(image.file)
      }
    });

    console.log(images)
  
    const title = document.querySelector(".add-event-title-input").value;
    const path = "/" + title.trim().toLowerCase().replace(/\s+/g, "-");
  
    formData.append("title", title);
    formData.append("path", path);
    formData.append("texts", JSON.stringify(inputs));
  
    const oldImages = event.imgs?.filter(img => !img.url.includes("blob:")) || [];
    formData.append("oldImages", JSON.stringify(oldImages));
  
    try {
      const response = await fetch(`http://localhost:5000/api/uploadEvent/${event._id}`, {
        method: "PUT",
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Etkinlik başarıyla güncellendi!");
      } else {
        alert("Hata oluştu: " + data.message);
      }
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Sunucu hatası oluştu.");
    }
  };
  
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      const url = URL.createObjectURL(file);
      const public_id = file.name.split(".")[0]; 
  
      return { file, url, public_id };
    });
  
    setImages((prevImages) => [...prevImages, ...newImages]);
  };
  
  const removeImg = (indexToRemove) => {
    const imageToRemove = images[indexToRemove];
  
    if (imageToRemove.public_id) {
      setDeletedImages((prev) => [...prev, imageToRemove.public_id]);
    }
  
    setImages(images.filter((_, index) => index !== indexToRemove));
  };
  
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
        <form onSubmit={(e) => handleSubmit(e)} className="add-event-inputs-form">
          <div className="add-event-input-container">
            <label className="input-title" htmlFor="title" >
              Etkinlik Başlığı
            </label>
            <input type="text" defaultValue={event.title} className="add-event-title-input" />
          </div>

          <div className="add-event-input-container">
            {inputs.map((value, index) => (
              <div className="add-event-input-container" style={{ position: "relative", }} key={index}>
                <label className="input-title" htmlFor={`title-${index}`}>
                  Etkinlik Açıklaması - {index + 1}
                </label>
                <textarea
                  className="add-event-input"
                  id={`title-${index}`}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  rows={4}
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

            <button type="button" onClick={addText} className="add-text-button"> Paragraf Ekle </button>
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
                  <img src={img.url} alt={`Preview ${index}`} className="add-event-image" />
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
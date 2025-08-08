import { useState } from "react";
import "./AddEvent.scss";
import addImgIcon from "/aafcl-addImgIcon.png";
import Xmark from "../../svgs/Xmark";
import deleteIcon from "/delete.png";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file: file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImg = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  const [inputs, setInputs] = useState([""]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image.file);
    });

    const title = document.querySelector(".add-event-title-input").value;
    const path = "/" + title.trim().toLowerCase().replace(/\s+/g, "-");
    formData.append("title", title);
    formData.append("path", path);
    formData.append("texts", JSON.stringify(inputs));

    try {
      const response = await fetch("https://aafcl-backend.onrender.com/api/addEvent", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Etkinlik başarıyla eklendi!");
        navigate("/admin");
      } else {
        alert("Hata oluştu: " + data.message);
      }
    } catch (error) {
      console.error("Error uploading event:", error);
      alert("Hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-event-container">
      <div className="add-event-form-title-container">
        <div className="add-event-title-container">
          <h4 className="add-event-title">
            Etkinlik Ekle
          </h4>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="add-event-inputs-form">
          <div className="add-event-input-container">
            <label className="input-title" htmlFor="title" >
              Etkinlik Başlığı
            </label>
            <input type="text" className="add-event-title-input" />
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
              name="images"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            <div className="image-preview-container">
              {images.map((img, index) => (
                <div key={index} className="event-img-icon-container">
                  <img src={img.preview} alt={`Preview ${index}`} className="add-event-image" />
                  <img src={deleteIcon} alt="" onClick={() => removeImg(index)} className="event-delete-img-icon" />
                </div>
              ))}
            </div>
          </div>

          <div className="event-save-button-container">
            <button type="submit" className="event-save-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  Kaydediliyor...
                  <span className="spinner" />
                </>
              ) : (
                "Kaydet"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

import { useState } from "react";
import "./AddEvent.scss";
import addImgIcon from "/aafcl-addImgIcon.png";

const AddEvent = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); 
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...imageUrls]); 
  };

  return (
    <div className="add-event-container">
      <div className="add-event-form-title-container">
        <div className="add-event-title-container">
          <h4 className="add-event-title">
            Etkinlik Ekle
          </h4>
        </div>
        <form className="add-event-inputs-form">
           <div className="add-event-input-container"> 
              <label className="input-title" htmlFor="title" > 
                 Etkinlik Başlığı
              </label>
              <input type="text" className="add-event-input" />
           </div>

           <div className="add-event-input-container"> 
              <label className="input-title" htmlFor="title" > 
                 Etkinlik Açıklaması
              </label>
              <input type="text" className="add-event-input" />
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
                <img key={index} src={img} alt={`Preview ${index}`} className="add-event-image" />
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;

import "./HomePageContact.scss";
// import school from "/aafcl-hContact3.png";
import school from "/aaSchool.jpg";

import { Link } from "react-router-dom";

const HomePageContact = () => {
    return(
        <div className="home-contact-container">
            <div className="home-contact-content-container">
                <img src={school} alt="" className="home-contact-img" />
                <div className="home-contact-text-container">
                    <h3 className="home-contact-title"> FCL Sınıfımızı Ziyaret Edin! </h3>
                    <p className="home-contact-second-title"> Detaylı Bilgi Almak ve Sınıfımızı Görmek İçin Okulumuz İle İletişime Geçin. </p>
                    <p className="home-contact-p"> 

Okulumuzu ziyaret ederek, FCL sınıfımızın sağladığı imkanları yerinde görebilir, sunduğumuz eğitim yöntemleri hakkında daha fazla bilgi edinebilirsiniz. Uzman kadromuz, sizleri ağırlamaktan mutluluk duyacak ve sorularınızı yanıtlamaya hazır olacaktır. </p>
                    <Link to={"/iletişim"} className="home-contact-link">
                      <button className="home-contact-button"> 
                      <p className="button-p">
                      İletişim
                        </p>    
                     </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default HomePageContact;
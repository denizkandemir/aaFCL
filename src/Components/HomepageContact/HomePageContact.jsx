import "./HomePageContact.scss";
import school from "/aafcl-hContact3.png";
import { Link } from "react-router-dom";

const HomePageContact = () => {
    return(
        <div className="home-contact-container">
            <div className="home-contact-content-container">
                <img src={school} alt="" className="home-contact-img" />
                <div className="home-contact-text-container">
                    <h3 className="home-contact-title"> FCL Sınıfımız Ziyaret Edin! </h3>
                    <p className="home-contact-second-title"> Detaylı Bilgi Almak ve Sınıfımızı Görmek İçin Okulumuz İle İletişime Geçin. </p>
                    <p className="home-contact-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates nam voluptatibus atque deserunt obcaecati porro illo facere voluptas, corrupti, fugiat iusto cumque reiciendis cupiditate omnis nemo minus, amet perferendis. </p>
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
import "./HomePageContact.scss";
// import school from "/aafcl-hContact3.png";
import school from "/aaSchool.jpg";

import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const HomePageContact = () => {

    withFadeInOnScroll();

    return (
        <div className="home-contact-container ">
            <div className="home-contact-content-container fade-in">
                <img src={school} alt="" className="home-contact-img" />
                <div className="home-contact-text-container">
                    <h3 className="home-contact-title"> FCL Sınıfımızı Ziyaret Edin! </h3>
                    <p className="home-contact-second-title"> Detaylı Bilgi Almak ve Sınıfımızı Görmek İçin Okulumuz İle İletişime Geçin. </p>
                    <p className="home-contact-p">
                        Okulumuzu ziyaret ederek, FCL sınıfımızın sağladığı imkanları yerinde görebilir, sunduğumuz eğitim yöntemleri hakkında daha fazla bilgi edinebilirsiniz. Uzman kadromuz, sizleri ağırlamaktan mutluluk duyacak ve sorularınızı yanıtlamaya hazır olacaktır. </p>
                    <Link to={"/iletişim"} className="home-contact-link">
                        <div className="homepage-contact-button-container">
                            <div className="homepage-contact-buttons">
                                <button className="homepage-contact-btn">
                                    İletişim
                                    <span className="homepage-contact-btn__inner">
                                        <span className="homepage-contact-btn__blobs">
                                            <span className="homepage-contact-btn__blob"></span>
                                            <span className="homepage-contact-btn__blob"></span>
                                            <span className="homepage-contact-btn__blob"></span>
                                            <span className="homepage-contact-btn__blob"></span>
                                        </span>
                                    </span>
                                </button>
                                <br />

                                <svg height={0} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
        </div>

    )
}

export default HomePageContact;
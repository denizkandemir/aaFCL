import "./HomepageCards.scss";
import { Link } from "react-router-dom";
import LearningPlaces from "../../objects/LearningPlaces";
import fclLogo from "/fcl-logo.png";
import useFadeInOnScroll from "../../hooks/animation/Animation";

const HomepageCards = () => {
    useFadeInOnScroll();
    return (
        <div className="cards-container">
            <div className="cards-content-container">
                <div className="cards-title-container">
                    <h2 className="cards-title fade-in"> FCL Öğrenme Alanlarımız </h2>
                    <p className="cards-p fade-in">Geleceğin öğrenme ortamlarını bugünden sunan FCL sınıfımız, öğrencilerin bilgiye ulaşma, üretme ve paylaşma süreçlerini destekleyen yenilikçi alanlardan oluşmaktadır. Her alan, farklı bir beceriyi geliştirmeye ve öğrencilerin bireysel potansiyellerini keşfetmelerine olanak tanır.</p>
                </div>
                <div className="cards-data-container">
                    {
                        LearningPlaces.map((place) => (
                            <div key={place.id} className="place-wrapper fade-in">
                                <div className="place-img-container">
                                    <img src={place.svg} className="place-img" alt="" />
                                </div>
                                <div className="place-content-container">
                                    <div className="place-text-container">
                                        <p className="place-p"> {place.title} </p>
                                        <p className="place-text"> {place.text} </p>
                                    </div>
                                    <div className="place-button-container">
                                        <div className="place-logo-container">
                                            <div className="fcl-logo-texts-container">
                                                <img className="place-logo" src={fclLogo} alt="" />
                                                <div className="fcl-texts-container">
                                                    <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                                    <p className="fcl-bottom-text"> By European Schoolnet </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            className="place-link"
                                            to={{pathname: `/fclAlanları${place.path}/${place.id}`}}
                                        >
                                            <div className="cards-button-container">

                                            <div className="cards-buttons">
                                                <button className="cards-blob-btn">
                                                    Keşfet
                                                    <span className="cards-blob-btn__inner">
                                                        <span className="cards-blob-btn__blobs">
                                                            <span className="cards-blob-btn__blob"></span>
                                                            <span className="cards-blob-btn__blob"></span>
                                                            <span className="cards-blob-btn__blob"></span>
                                                            <span className="cards-blob-btn__blob"></span>
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
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default HomepageCards;
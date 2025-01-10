import "./HomepageCards.scss";
import { Link } from "react-router-dom";
import LearningPlaces from "../../objects/LearningPlaces";
import fclLogo from "/fcl-logo.png";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const HomepageCards = () => {
    withFadeInOnScroll();
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
                                            to={{
                                                pathname: `${place.path}/${place.id}`,
                                              }}
                                        >                
                                            <button className="place-button">
                                            <p className="button-text"> İncele </p> </button>
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
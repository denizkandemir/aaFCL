import "./HomepageCards.scss";
import { Link } from "react-router-dom";
import LearningPlaces from "../../objects/LearningPlaces";

const HomepageCards = () => {
    return (
        <div className="cards-container">
            <div className="cards-content-container">
                <h2 className="cards-title"> FCL Öğrenme Alanlarımz </h2>
                <div className="cards-data-container">
                    {
                        LearningPlaces.map((place) => (
                            <div key={place.id} className="place-wrapper fade-in">
                            <div className="place-img-container">
                              <img src={place.img} className="place-img" alt="" />
                            </div>
                            <div className="place-text-container">
                              <p className="place-p"> {place.title} </p>
                              <p className="place-text"> {place.text} </p>
                            </div>
                            <div className="place-button-container">
                              {/* <img className="place-logo" src={place.gif} alt="" /> */}
                              <Link
                                className="place-link"
                                to={"/öğrenmeAlanlarımız"}
                              >                  <button className="place-button">
                                  <p className="button-text"> İncele </p> </button>
                              </Link>
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
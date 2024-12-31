import "./FCLPlaces.scss";
import LearningPlaces from "../../objects/LearningPlaces";
import Slide from "../Slider/Slider";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const FCLPlaces = () => {
    withFadeInOnScroll();
    return (
        <div className="learning-places-container">
            <div className="learning-places-content-container">
                {
                    LearningPlaces.map((place) => (
                        <div key={place.id} className={place.id % 2 === 1 ? "learning-places-wrapper" : "learning-places-wrapper learning-places-wrapper-reverse"}>
                            <div className="learning-places-text-container">
                                <div className="learning-places-titles-container">
                                    <h4 className="learning-places-little-title"> FCL Alanlarımız </h4>
                                    <h3 className="learning-places-title"> {place.title} </h3>
                                </div>
                                <p className="learning-places-p">
                                    {place.pageText}
                                </p>
                            </div>
                            <div className="learning-places-slide-container">
                                <Slide SlideImgs={place.imgs}  container={"learning-places-slide-content-container"} imgClass={"learning-places-img"} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FCLPlaces;
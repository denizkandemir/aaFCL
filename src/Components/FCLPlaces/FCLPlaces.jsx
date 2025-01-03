import "./FCLPlaces.scss";
import LearningPlaces from "../../objects/LearningPlaces";
import Slide from "../Slider/Slider";
import withFadeInOnScroll from "../../hooks/animation/Animation";
import { useState } from "react";

const FCLPlaces = ({isSlideOpen,setSlideOpen}) => {

    const [activeSlideId, setActiveSlideId] = useState(null);

    const openSlide = (id) => {
        setActiveSlideId(id);
        setSlideOpen(true);
    };

    withFadeInOnScroll();
    return (
        <div className="learning-places-container" >
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
                                <p className="learning-places-p">
                                    {place.pageText2}
                                </p>
                            </div>
                            {(!isSlideOpen || activeSlideId === place.id) && (
                                <div 
                                    className={
                                        isSlideOpen
                                            ? "learning-places-slide-container-open"
                                            : "learning-places-slide-container"
                                    }
                                >
                                    <Slide
                                      key={place.id}
                                      isSlideOpen={isSlideOpen}
                                        SlideImgs={place.imgs}
                                        id={place.id}
                                        container="learning-places-slide-content-container"
                                        imgClass="learning-places-img"
                                    />
                                </div>
                            )}
                            <div className={place.id % 2 === 1 ? "learning-places-collage-container" : "learning-places-collage-container learning-places-collage-reverse"}>
                                <div className="learning-img-big-container">
                                    <img src={place.bigImg} onClick={() => openSlide(place.id)} alt="" className="learning-img-big" />
                                </div>
                                <div className="learning-collage-two-container">
                                    <img src={place.littleImg} alt="" onClick={() => openSlide(place.id)} className={place.id % 2 === 1 ? "learning-img-little" : "learning-img-little learning-img-little-reverse"} />
                                    <img src={place.littleImg2} alt="" onClick={() => openSlide(place.id)} className={place.id % 2 === 1 ? "learning-img-little" : "learning-img-little learning-img-little-reverse"} />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FCLPlaces;
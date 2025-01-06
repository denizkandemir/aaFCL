import "./FCLPlaces.scss";
import LearningPlaces from "../../objects/LearningPlaces";
import Slide from "../Slider/Slider";
import withFadeInOnScroll from "../../hooks/animation/Animation";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import learningImg from "/learningPlaces1.png";
import learningImgResponsive from "/learningPlacesResponsive.png";
import { Link } from "react-router-dom";
import NavigationArrowRight from "../../svgs/NavigationArrowRight";
import NavigationArrowLeft from "../../svgs/NavigationArrowLeft";

const FCLPlaces = ({ isSlideOpen, setSlideOpen }) => {

    const { routeId } = useParams();
    const place = LearningPlaces.find((place) => parseInt(place.id) === parseInt(routeId));

    let prevPlace = false;
    let nextPlace = false;

    if (parseInt(place.id) !== 1) {
        prevPlace = LearningPlaces.find((place) => parseInt(place.id) === (parseInt(routeId) - 1));
    } else {
        prevPlace = false;
    }

    if (parseInt(place.id) !== 6) {
        nextPlace = LearningPlaces.find((place) => parseInt(place.id) === (parseInt(routeId) + 1));
    } else {
        nextPlace = false;
    }

    const [activeSlideId, setActiveSlideId] = useState(null);
    const openSlide = (id) => {
        setActiveSlideId(id);
        setSlideOpen(true);
    };

    withFadeInOnScroll();
    return (
        <>
            <Banner img={learningImg} location={place.title} responsiveImg={learningImgResponsive} text={"FCL Öğrenme Alanları"} />
            <div className="learning-places-container" >
                <div className="learning-places-content-container">
                    <div key={place.id} className="learning-places-wrapper">
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
                        <div className="learning-places-collage-container" >
                            <div className="learning-img-big-container">
                                <img src={place.bigImg} onClick={() => openSlide(place.id)} alt="" className="learning-img-big" />
                            </div>
                            <div className="learning-collage-two-container">
                                <img src={place.littleImg} alt="" onClick={() => openSlide(place.id)} className={place.id % 2 === 1 ? "learning-img-little" : "learning-img-little learning-img-little-reverse"} />
                                <img src={place.littleImg2} alt="" onClick={() => openSlide(place.id)} className={place.id % 2 === 1 ? "learning-img-little" : "learning-img-little learning-img-little-reverse"} />
                            </div>
                        </div>
                    </div>

                    <div className="learning-places-navigation-container">
                        {prevPlace && (
                            <Link
                                className="place-link"
                                to={{
                                    pathname: `${prevPlace.path}/${prevPlace.id}`,
                                }} >
                                 <NavigationArrowLeft fill={"#043d60"} height={70} width={70} />   
                            </Link>
                        )}
                        <h4 className="learning-navigation-title"> Smyrna FCL Alanları </h4>
                        {nextPlace && (
                            <Link
                                className="place-link"
                                to={{
                                    pathname: `${nextPlace.path}/${nextPlace.id}`,
                                }} >
                                 <NavigationArrowRight fill={"#043d60"} height={70} width={70} />   
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FCLPlaces;
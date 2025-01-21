import "./FCLPlaces.scss";
import LearningPlaces from "../../objects/LearningPlaces";
import withFadeInOnScroll from "../../hooks/animation/Animation";
import { useParams } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import learningImg from "/learningPlaces1.png";
import learningImgResponsive from "/learningPlacesResponsive.png";
import { Link } from "react-router-dom";
import NavigationArrowRight from "../../svgs/NavigationArrowRight";
import NavigationArrowLeft from "../../svgs/NavigationArrowLeft";
import Slide from "../Slide/Slide";
import fclLogo from "/fcl-logo.png";
import { useEffect, useRef, useState } from "react";
import Xmark from "../../svgs/Xmark";

const FCLPlaces = ({ isSlideOpen, setSlideOpen }) => {


    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const openSlide = () => {
        if (screenSize.width > 1200 || screenSize.width < 600) {
            setSlideOpen(true);
        }
        else {
            closeSlide();
        }
    };

    const closeSlide = () => {
        setSlideOpen(false)
    };

    const slideRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (slideRef.current && !slideRef.current.contains(event.target)) {
                closeSlide();
            }
        };

        if (isSlideOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSlideOpen]);

    const { routeId } = useParams();
    const place = LearningPlaces.find((place) => parseInt(place.id) === parseInt(routeId));

    let prevPlace = false;
    let nextPlace = false;

    if (parseInt(place.id) !== 1) {
        prevPlace = LearningPlaces.find((place) => parseInt(place.id) === (parseInt(routeId) - 1));
    }

    if (parseInt(place.id) !== 6) {
        nextPlace = LearningPlaces.find((place) => parseInt(place.id) === (parseInt(routeId) + 1));
    }

    withFadeInOnScroll();

    return (
        <>
            <Banner img={learningImg} location={"FCL Alanları"} responsiveImg={learningImgResponsive} text={place.title} />
            <div className="learning-places-container" >
                <div className="learning-places-content-container">
                    <div key={place.id} className="learning-places-wrapper">
                        <div className="learning-places-text-container">
                            <div className="learning-places-titles-container">
                                <h4 className="learning-places-little-title fade-in "> FCL Alanlarımız </h4>
                                <h3 className="learning-places-title fade-in "> {place.title} </h3>
                            </div>
                            <p className="learning-places-p fade-in ">
                                {place.pageText}
                            </p>
                            <p className="learning-places-p fade-in ">
                                {place.pageText2}
                            </p>
                        </div>
                        <div className="slide-dark-title-container">
                            <div className={isSlideOpen ? "slide-title-svg-container-open" : "d-none"}>
                                <div className="fcl-logo-texts-container">
                                    <img src={fclLogo} className="fcl-logo" alt="" />
                                    <div className="fcl-texts-container">
                                        <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                        <p className="fcl-bottom-text"> By European Schoolnet </p>
                                    </div>
                                </div>

                                <h3 className="learning-slide-title">
                                    {place.title}
                                </h3>

                                <Xmark fill={"white"} width={30} height={30} />
                            </div>
                            <div onClick={() => openSlide()}
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
                                    containerRef={slideRef}
                                    container={isSlideOpen ? "learning-places-slide-content-container-open learning-places-slide-content-container" : "learning-places-slide-content-container"}
                                    imgClass={isSlideOpen ? "learning-places-img learning-places-img-open" : "learning-places-img"}
                                />
                            </div>
                        </div>

                        <div className="learning-places-collage-container fade-in" >
                            <div className="learning-img-big-container">
                                <img src={place.bigImg} onClick={() => openSlide(place.id)} alt="" className="learning-img-big" />
                            </div>
                            <div className="learning-collage-two-container">
                                <img src={place.littleImg} alt="" onClick={() => openSlide(place.id)} className={"learning-img-little"} />
                                <div className="img-length-container" onClick={() => openSlide(place.id)}>
                                    <img src={place.littleImg2} alt="" className={"learning-img-little"} />
                                    <div className="length-dark-container"></div>
                                    <p className="learning-length-p"> +{place.imgs.length} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="learning-places-navigation-container fade-in animation">
                        {prevPlace && (
                            <Link
                                className="place-link"
                                to={{
                                    pathname: `${prevPlace.path}/${prevPlace.id}`,
                                }} >
                                <div className="learning-arrow-p-container">
                                    <NavigationArrowLeft fill={"#043d60"} height={70} width={70} />
                                    <p className="learning-place-p"> {prevPlace.title} </p>
                                </div>
                            </Link>
                        )}
                        <h4 className="learning-navigation-title"> Smyrna FCL Alanları </h4>
                        {nextPlace && (
                            <Link
                                className="place-link"
                                to={{
                                    pathname: `${nextPlace.path}/${nextPlace.id}`,
                                }} >
                                <div className="learning-arrow-p-container">
                                    <p className="learning-place-p"> {nextPlace.title} </p>
                                    <NavigationArrowRight fill={"#043d60"} height={70} width={70} />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FCLPlaces;
import "./EventInfo.scss"
import { useParams } from "react-router-dom";
import Xmark from "../../svgs/Xmark";
import { useRef } from "react";
import Slide from "../Slide/Slide";
import fclLogo from "/fcl-logo.png";
import { useState, useEffect } from "react";
import Events from "../../objects/Events";
import eventsImg from "/learningPlaces6.png";
import Banner from "../Banner/Banner";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const EventInfo = ({isEventSlideOpen,setEventSlideOpen}) => {

    const { routeId } = useParams();
    const event = Events.find((place) => parseInt(place.id) === parseInt(routeId));

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
    
    const openEventSlide = () => {
        if (screenSize.width > 1200 || screenSize.width < 600) {
            setEventSlideOpen(true);
        }
        else {
            closeEventSlide();
        }
    };

    const closeEventSlide = () => {
        setEventSlideOpen(false)
    };

    const eventSlideRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (eventSlideRef.current && !eventSlideRef.current.contains(event.target)) {
                closeEventSlide();
            }
        };

        if (isEventSlideOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEventSlideOpen]);

    withFadeInOnScroll();

    return (
        <>
            <Banner img={eventsImg} responsiveImg={eventsImg} location={"Etkinliklerimiz"} text={event.title} />
            <div className="event-container">
                <div key={event.id} className="event-wrapper">
                    <div className="event-titles-container">
                        <h5 className="event-little-title fade-in "> Etkinliklerimiz </h5>
                        <h3 className="event-title fade-in "> {event.title} </h3>
                    </div>
                    <div className="slide-dark-title-container ">
                        <div className={isEventSlideOpen ? "slide-title-svg-container-open" : "d-none"}>
                            <div className="fcl-logo-texts-container">
                                <img src={fclLogo} className="fcl-logo" alt="" />
                                <div className="fcl-texts-container">
                                    <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                    <p className="fcl-bottom-text"> By European Schoolnet </p>
                                </div>
                            </div>

                            <h3 className="learning-slide-title">
                                {event.title}
                            </h3>

                            <Xmark fill={"white"} width={30} height={30} />
                        </div>
                        <div 
                                className={
                                    isEventSlideOpen
                                        ? "event-slide-container-open"
                                        : "event-slide-container "
                                }
                            >
                            <Slide containerRef={eventSlideRef} openSlide={openEventSlide} SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={isEventSlideOpen} container={"event-slide-content-container fade-in"} imgClass={"event-img"} />
                        </div>
                    </div>
                    <div className="event-text-container">
                        <p className="event-p fade-in"> {event.text} </p>
                        <p className="event-p fade-in"> {event.text2} </p>
                        <p className="event-p fade-in"> {event.text3} </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default EventInfo;
import "./EventsContent.scss";
import Events from "../../objects/Events";
import Slide from "../Slide/Slide";
import { useState, useEffect } from "react";
import fclLogo from "/fcl-logo.png";
import Xmark from "../../svgs/Xmark";
import { useRef } from "react";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const EventsContent = () => {

    withFadeInOnScroll();

    const [isSlideOpen, setSlideOpen] = useState(false);

    // useEffect(() => {
    //     setSlideOpen(true)
    // }, []);

    const openSlide = () => {
        setSlideOpen(true);
    }

    const closeSlide = () => {
        setSlideOpen(false)
    };

    const eventSlideRef = useRef(null);

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


    return (
        <div className="events-container">

            {
                Events.slice().reverse().map((event) => (
                    <div key={event.id} className={event.id % 2 === 0 ? "event-wrapper-container" : "event-wrapper-container event-reverse"}>
                        <div key={event.id} className="event-wrapper">
                            <div className="event-titles-container">
                                <h5 className="event-little-title fade-in "> Etkinliklerimiz </h5>
                                <h3 className="event-title fade-in "> {event.title} </h3>
                            </div>
                            {/* <div className="event-slide-container fade-in">
                                <Slide SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={isSlideOpen} container={"event-slide-content-container"} imgClass={"event-img"} />
                            </div> */}

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
                                        {event.title}
                                    </h3>

                                    <Xmark fill={"white"} width={30} height={30} />
                                </div>
                                <div onClick={() => openSlide()}
                                    className={
                                        isSlideOpen
                                            ? "event-slide-container-open fade-in"
                                            : "event-slide-container fade-in"
                                    }
                                >
                                    <Slide containerRef={eventSlideRef} SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={isSlideOpen} container={"event-slide-content-container"} imgClass={"event-img"} />

                                </div>
                            </div>

                            <div className="event-text-container">

                                <p className="event-p fade-in"> {event.text} </p>
                                <p className="event-p fade-in"> {event.text2} </p>
                                <p className="event-p fade-in"> {event.text3} </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default EventsContent;

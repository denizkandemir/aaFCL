import "./EventsContent.scss";
import Events from "../../objects/Events";
import Slide from "../Slide/Slide";
import { useState, useEffect } from "react";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const EventsContent = () => {

    withFadeInOnScroll();

    const [isSlideOpen, setSlideOpen] = useState(false);

    useEffect(() => {
        setSlideOpen(true)
    }, []);

    return (
        <div className="events-container">

            {
               Events.slice().reverse().map((event) => (
                    <div key={event.id} className={event.id % 2 === 1 ? "event-wrapper-container" : "event-wrapper-container event-reverse"}>
                        <div key={event.id} className="event-wrapper">
                            <div className="event-titles-container">
                                <h5 className="event-little-title fade-in "> Etkinliklerimiz </h5>
                                <h3 className="event-title fade-in "> {event.title} </h3>
                            </div>
                            <div className="event-slide-container fade-in">
                                <Slide SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={isSlideOpen} container={"event-slide-content-container"} imgClass={"event-img"} />
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

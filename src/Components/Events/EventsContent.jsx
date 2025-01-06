import "./EventsContent.scss";
import Events from "../../objects/Events";
import Slide from "../Slide/Slide";
import { useState, useEffect } from "react";

const EventsContent = () => {

    const [isSlideOpen, setSlideOpen] = useState(false);

    useEffect(() => {
        setSlideOpen(true)
    }, []);

    return (
        <div className="events-container">
            <div className="events-content-container">
                {
                    Events.map((event) => (
                        <div key={event.id} className="event-wrapper">

                            <div className="event-text-container">
                                <div className="event-titles-container">
                                    <h5 className="event-little-title "> Etkinliklerimiz </h5>
                                    <h3 className="event-title "> {event.title} </h3>
                                </div>
                                <p className="event-p"> {event.text} </p>
                                <p className="event-p"> {event.text2} </p>
                                <p className="event-p"> {event.text3} </p>
                            </div>
                            <div className="event-slide-container">
                                <Slide SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={isSlideOpen} container={"event-slide-content-container"} imgClass={"event-img"} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default EventsContent;

import "./EventsContent.scss";
import Events from "../../objects/Events";
import Slide from "../Slide/Slide";

const EventsContent = () => {
    return (
        <div className="events-container">
            <div className="events-content-container">
                {
                    Events.map((event) => (
                        <div key={event.id} className="event-wrapper">
                            <div className="event-slide-container">
                                <Slide SlideImgs={event.imgs} id={event.id} key={event.id} isSlideOpen={true} container={"event-slide-content-container"} imgClass={"event-img"} />
                            </div>
                            <div className="event-text-container">
                                <h3 className="event-title"> {event.title} </h3>
                                <p className="event-p"> {event.text} </p>
                                <p className="event-p"> {event.text2} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default EventsContent;

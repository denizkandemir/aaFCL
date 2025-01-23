import "./EventsContent.scss";
import Events from "../../objects/Events";
import fclLogo from "/fcl-logo.png";
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const EventsContent = () => {

    withFadeInOnScroll();

    return (
        <div className="event-cards-container">
            <div className="event-cards-content-container">
                <div className="event-cards-data-container">            
                {
                    Events.slice().reverse().map((event) => (
                        <div key={event.id} className="event-ınfo-card-wrapper fade-in">
                            <div className="event-ınfo-img-container">
                                <img src={event.cardImg} className="event-ınfo-info-img" alt="" />
                            </div>
                            <div className="event-ınfo-content-container">
                                <div className="event-ınfo-text-container">
                                    <p className="event-ınfo-p"> {event.title} </p>
                                    <p className="event-ınfo-text"> {event.text} </p>
                                </div>
                                <div className="event-ınfo-button-container">
                                    <div className="event-ınfo-logo-container">
                                        <div className="fcl-logo-texts-container">
                                            <img className="event-ınfo-logo" src={fclLogo} alt="" />
                                            <div className="fcl-texts-container">
                                                <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                                <p className="fcl-bottom-text"> By European Schoolnet </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        className="event-ınfo-link"
                                        to={{ pathname: `/etkinlikler${event.path}/${event.id}` }}
                                      >                                    
                                        <div className="event-cards-button-container">

                                            <div className="event-cards-buttons">
                                                <button className="event-cards-blob-btn">
                                                    Devamını Oku
                                                    <span className="event-cards-blob-btn__inner">
                                                        <span className="event-cards-blob-btn__blobs">
                                                            <span className="event-cards-blob-btn__blob"></span>
                                                            <span className="event-cards-blob-btn__blob"></span>
                                                            <span className="event-cards-blob-btn__blob"></span>
                                                            <span className="event-cards-blob-btn__blob"></span>
                                                        </span>
                                                    </span>
                                                </button>
                                                <br />

                                                <svg height={0} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                    <defs>
                                                        <filter id="goo">
                                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default EventsContent;

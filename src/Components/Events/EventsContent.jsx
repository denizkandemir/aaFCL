import "./EventsContent.scss";
import fclLogo from "/fcl-logo.png";
import { Link } from "react-router-dom";
import withFadeInOnScroll from "../../hooks/animation/Animation";
import { useState, useEffect } from "react";

const EventsContent = () => {

    const API_URL = import.meta.env.REACT_APP_API_URL;
    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
                setLoading(false);
            });
    }, []);

    const [fadeInReady, setFadeInReady] = useState(false);

    useEffect(() => {
      if (!loading) {
        setFadeInReady(true);
      }
    }, [loading]);
  
    withFadeInOnScroll(); 
    
    if (loading) {
        return <div> Etkinlikler Yükleniyor ... </div>;
    }

    return (
        <div className="event-cards-container">
            <div className="event-cards-content-container ">
                <div className="event-cards-data-container ">
                    {
                        events.slice().reverse().map((event) => (
                            <div key={event._id}  className={`event-info-card-wrapper fade-in ${fadeInReady ? 'show' : ''}`}>
                                <div className="event-ınfo-img-container">
                                    {
                                 event.imgs.slice(0, 1).map((img, index) => (
                                            <img key={index} src={img.url} className="event-ınfo-info-img" alt="" />
                                        ))
                                    }
                                </div>
                                <div className="event-ınfo-content-container">
                                    <div className="event-ınfo-text-container">
                                        <p className="event-ınfo-p"> {event.title} </p>
                                        {
                                            event.texts.slice(0, 1).map((text, index) => (
                                                <p key={index} className="event-info-text"> {text} </p>
                                            ))
                                        }
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
                                            to={{ pathname: `/etkinlikler${event.path}/${event._id}` }}
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

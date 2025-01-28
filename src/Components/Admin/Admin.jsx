import "./Admin.scss";
import Events from "../../objects/Events";
import fclLogo from "/fcl-logo.png";
import withFadeInOnScroll from "../../hooks/animation/Animation";

const Admin = () => {

    withFadeInOnScroll();

    return (
        <>
            <div className="admin-events-container">
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

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="add-event-container">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;
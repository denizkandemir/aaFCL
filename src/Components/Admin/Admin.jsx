import "./Admin.scss";
import fclLogo from "/fcl-logo.png";
import useFadeInOnScroll from "../../hooks/animation/Animation";
import editIcon from "/edit.png";
import deleteIcon from "/delete.png";
import addEventImg3 from "/aafcl-add3.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Admin = () => {

    const API_URL = import.meta.env.REACT_APP_API_URL;
    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://suaafcl.com/api/events")
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

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Etkinliği silmek istediğinize emin misiniz?");
        if (!confirmDelete) return;
    
        try {
            const response = await fetch(`https://suaafcl.com/api/events/${id}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
            } else {
                console.error("Failed to delete event");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };
    
    const [fadeInReady, setFadeInReady] = useState(false);

    useEffect(() => {
        if (!loading) {
            setFadeInReady(true);
        }
    }, [loading]);

    useFadeInOnScroll();

    if (loading) {
        return <div> Etkinlikler Yükleniyor ... </div>;
    }

    return (
        <>
            <div className="admin-admins-container">
                <div className="admin-cards-data-container">
                    {
                        events.slice().reverse().map((admin) => (
                            <div key={admin._id} className={`admin-ınfo-card-wrapper fade-in ${fadeInReady ? 'show' : ''}`}>
                                <div className="admin-ınfo-img-container">
                                    {
                                        admin.imgs.slice(0, 1).map((img, index) => (
                                            <img key={index} src={img.url} className="admin-ınfo-info-img" alt="" />
                                        ))
                                    }
                                </div>
                                <div className="admin-ınfo-content-container">
                                    <div className="admin-ınfo-text-container">
                                        <p className="admin-ınfo-p"> {admin.title} </p>
                                        {
                                            admin.texts.slice(0, 1).map((text, index) => (
                                                <p key={index} className="admin-ınfo-text"> {text} </p>
                                            ))
                                        }

                                    </div>
                                    <div className="admin-ınfo-button-container">
                                        <div className="admin-ınfo-logo-container">
                                            <div className="fcl-logo-texts-container">
                                                <img className="admin-ınfo-logo" src={fclLogo} alt="" />
                                                <div className="fcl-texts-container">
                                                    <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                                    <p className="fcl-bottom-text"> By European Schoolnet </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="admin-icons-container">
                                            <Link className="event-ınfo-link" to={{ pathname: `/etkinlikDüzenle${admin.path}/${admin._id}` }}>
                                                <img src={editIcon} alt="" className="admin-icon-img" />
                                            </Link>
                                            <img src={deleteIcon} onClick={() => handleDelete(admin._id)} alt="" className="admin-icon-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link className="add-event-link" to={"/etkinlikEkle"}>
                    <div className={`add-admin-container fade-in ${fadeInReady ? 'show' : ''}`}>
                        <img src={addEventImg3} alt="" className="event-add-img" />
                        <p className="event-add-p"> Etkinlik Ekle </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Admin;
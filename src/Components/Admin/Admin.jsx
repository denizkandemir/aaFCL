import "./Admin.scss";
import Events from "../../objects/Events";
import fclLogo from "/fcl-logo.png";
import withFadeInOnScroll from "../../hooks/animation/Animation";
import editIcon from "/edit.png";
import deleteIcon from "/delete.png";
import addEventImg3 from "/aafcl-add3.png";
import { Link } from "react-router-dom";

const Admin = () => {

    withFadeInOnScroll();

    return (
        <>
            <div className="admin-admins-container">
                <div className="admin-cards-data-container">
                    {
                        Events.slice().reverse().map((admin) => (
                            <div key={admin.id} className="admin-ınfo-card-wrapper fade-in">
                                <div className="admin-ınfo-img-container">
                                    <img src={admin.cardImg} className="admin-ınfo-info-img" alt="" />
                                </div>
                                <div className="admin-ınfo-content-container">
                                    <div className="admin-ınfo-text-container">
                                        <p className="admin-ınfo-p"> {admin.title} </p>
                                        <p className="admin-ınfo-text"> {admin.text} </p>
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
                                            <Link className="event-ınfo-link" to={{ pathname: `/etkinlikDüzenle${admin.path}/${admin.id}` }}>
                                                <img src={editIcon} alt="" className="admin-icon-img" />
                                            </Link>
                                            <img src={deleteIcon} alt="" className="admin-icon-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link className="add-event-link" to={"/etkinlikEkle"}>
                    <div className="add-admin-container fade-in">
                        <img src={addEventImg3} alt="" className="event-add-img" />
                        <p className="event-add-p"> Etkinlik Ekle </p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Admin;
import React from "react";
import "./Sidebar.scss"
import { Link } from "react-router-dom";
import Xmark from "../../svgs/Xmark";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import LearningPlaces from "../../objects/LearningPlaces";
import { useState } from "react";
import rightArrow from "/right-arrow-angle.png";
import downArrow from "/down-arrow.png";


const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {

    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const linkHandler = () => {
        setSidebarOpen(false);
    }

    const changeAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    };


    return (
        <div className="sidebar-container">
            <div className="sidebar-links-container">
                <div className="sidebar-links">
                    <Link className="navbar-link" onClick={linkHandler} to="/">
                        <div className="sidebar-link-svg-container">
                            <p className="sidebar-p">
                                Ana Sayfa
                            </p>
                            <img src={rightArrow} alt="" className="sidebar-arrow-img" />
                        </div>
                    </Link>

                    <Link className="navbar-link" onClick={linkHandler} to={"/fclNedir"}>
                        <div className="sidebar-link-svg-container">
                            <p className="sidebar-p">
                                Fcl Nedir
                            </p>
                            <img src={rightArrow} alt="" className="sidebar-arrow-img" />
                        </div>
                    </Link>

                    <div className={isAccordionOpen ? "open-accordion" : "close-accordion "} onClick={() => changeAccordion()}>
                        <div className={isAccordionOpen ? "sidebar-link-svg-container open-link-svg-container learning-places-link-svg-container " : "sidebar-link-svg-container learning-places-link-svg-container "}>
                            <p className="navbar-link">
                                Öğrenme Alanlarımız
                            </p>
                            <img src={downArrow} alt="" className={isAccordionOpen ? "sidebar-arrow-img arrow-img-up" : "sidebar-arrow-img"} />
                        </div>
                        <div className="sidebar-learning-places-container">
                            {
                                LearningPlaces.map((place) => (
                                    <div key={place.id} >
                                        <Link className="navbar-link " onClick={linkHandler} to={{
                                            pathname: `${place.path}/${place.id}`,
                                        }} >
                                            <div className="sidebar-learning-link-svg-container">
                                                <p className="sidebar-accordion-text">
                                                    {place.title}
                                                </p>
                                                <img src={rightArrow} alt="" className="sidebar-arrow-img-learning" />
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <Link className="navbar-link" onClick={linkHandler} to={"/etkinliklerimiz"}>
                        <div className="sidebar-link-svg-container">
                            <p className="sidebar-p">
                                Etkinliklerimiz
                            </p>
                            <img src={rightArrow} alt="" className="sidebar-arrow-img" />
                        </div>
                    </Link>
                    <Link className="navbar-link" onClick={linkHandler} to={"/iletişim"}>
                        <div className="sidebar-link-svg-container">
                            <p className="sidebar-p">
                                İletişim
                            </p>
                            <img src={rightArrow} alt="" className="sidebar-arrow-img" />
                        </div>
                    </Link>
                </div>

                <div onClick={() => closeSidebar()} className="sidebar-closer">
                    <Xmark width={30} height={30} fill={"black"} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
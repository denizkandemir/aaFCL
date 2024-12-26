import React from "react";
import "./sidebar.scss"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Xmark from "../../svgs/Xmark";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {

    const location = useLocation();
    const currentLocation = location.pathname;

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    const linkHandler = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-links-container">
                <div className="sidebar-links">
                    <Link className="navbar-link" onClick={linkHandler} to="/">Ana Sayfa</Link>
                    <Link className="navbar-link" onClick={linkHandler} to={"/fclNedir"}> <li className="navbar-link"> FCL Nedir </li> </Link>
                    <Link className="navbar-link" onClick={linkHandler} to={"/öğrenmeAlanlarımız"}> <li className="navbar-link"> Öğrenme Alanlarımız </li></Link>
                    <Link className="navbar-link" onClick={linkHandler} to={"/etkinliklerimiz"}><li className="navbar-link"> Etkinliklerimiz </li></Link>
                    <Link className="navbar-link" onClick={linkHandler} to={"/iletişim"}><li className="navbar-link"> İletişim  </li></Link>
                </div>

                <div onClick={() => closeSidebar()} className="sidebar-closer">
                    <Xmark />
                </div>
            </div>
            <div className={isSidebarOpen ? "sidebar-blurer" : "sidebar-not-blurer"}></div>
        </div>
    )
}

export default Sidebar;
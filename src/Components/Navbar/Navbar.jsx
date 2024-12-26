import "./Navbar.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../svgs/HamburgerMenu";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const sidebarOpener = (event) => {
        event.preventDefault();
        setSidebarOpen(true);
    };

    const root = document.querySelector("#root");

    if (isSidebarOpen) {
        document.body.classList.add("no-scroll");
        root.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
        root.classList.remove("no-scroll");
    }

    return (
        <>
            <div className={isSidebarOpen ? "open-sidebar" : "close-sidebar"}>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
            <div className="navbar-container">
                <div className="navbar-logo-p-container">
                    <Link className="link-p" to={"/"} >
                        <div className="logo-texts-container">
                            <img src={bakanlıkLogo} className="ministery-logo" alt="" />
                            <img src={okulLogo} className="school-logo-responsive" alt="" />
                            <div className="fcl-logo-text-container-responsive">
                                <img src={fclLogo} className="fcl-logo-responsive" alt="" />
                                <div className="fcl-texts-container-responsive">
                                    <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                    <p className="fcl-bottom-text"> By European Schoolnet </p>
                                </div>
                            </div>
                            <div className="texts-container">
                                <p className="ministery-text"> T.C Milli Eğitim <br /> Bakanlığı </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="navbar-center-title-container">
                    <h2 className="navbar-center-title"> ŞUAAFCL </h2>
                </div>

                <div className="navbar-center-container">
                    <ul className="navbar-links-container">
                        <Link className="link-p" to={"/fclNedir"}> <li className="navbar-link"> FCL Nedir </li> </Link>
                        <Link className="link-p" to={"/öğrenmeAlanlarımız"}> <li className="navbar-link"> Öğrenme Alanlarımız </li></Link>
                        <Link className="link-p" to={"/etkinliklerimiz"}><li className="navbar-link"> Etkinliklerimiz </li></Link>
                        <Link className="link-p" to={"/iletişim"}><li className="navbar-link"> İletişim  </li></Link>
                        {/* <li className="navbar-link"></li> */}
                    </ul>
                </div>

                <div className="navbar-right-logo-container">
                    <img src={okulLogo} className="school-logo" alt="" />
                    <div className="fcl-logo-texts-container">
                        <img src={fclLogo} className="fcl-logo" alt="" />
                        <div className="fcl-texts-container">
                            <p className="fcl-text"> Future <br /> Classroom Lab </p>
                            <p className="fcl-bottom-text"> By European Schoolnet </p>
                        </div>
                    </div>
                </div>

                <div className="hamburger-container" onClick={sidebarOpener}>
                    <HamburgerMenu />
                </div>
            </div>
        </>
    );
}

export default Navbar;
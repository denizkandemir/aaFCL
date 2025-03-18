import "./Navbar.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../svgs/HamburgerMenu";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import LearningPlaces from "../../objects/LearningPlaces";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import adminLogo from "/şuaafcl-school.jpg";
import LogOutArrow from "../../svgs/LogOutArrow";

const Navbar = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const closeDropdown = () => {
        const dropdown = document.querySelector(".learning-dropdown-container");
        dropdown.classList.add("d-none");
        dropdown.style.pointerEvents = "none";
        setTimeout(() => {
            dropdown.classList.remove("d-none");
            dropdown.style.pointerEvents = "auto";
        }, 1000);
    }
 
    const adminLogOut = () => {
        localStorage.setItem("isLogin" , JSON.stringify(false));
        navigate("/");
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
                        <div className="link-dropdown-container">
                            <div className="learning-link-container">
                                <li className="navbar-link learning-link"> Öğrenme Alanlarımız </li>
                            </div>
                            <div className="learning-dropdown-container">
                                <div className="learning-dropdown-content-container">
                                    {
                                        LearningPlaces.map((place) => (
                                            <Link key={place.id} to={{
                                                pathname: `/fclAlanları${place.path}/${place.id}`,
                                            }}
                                                className="learning-link"
                                            >
                                                <div key={place.id} onClick={() => closeDropdown()} className="learning-dropdown-wrapper">
                                                    <p className="navbar-learning-title"> {place.title} </p>
                                                    <img src={place.svg} alt="" className="navbar-learning-svg" />
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <Link className="link-p" to={"/etkinliklerimiz"}><li className="navbar-link"> Etkinliklerimiz </li></Link>
                        <Link className="link-p" to={"/iletişim"}><li className="navbar-link"> İletişim  </li></Link>
                    </ul>
                </div>

                <div className="navbar-right-logo-container">
                    <img src={okulLogo} className="school-logo" alt="" />
                    {
                        location.pathname !== "/admin" && (
                            <div className="fcl-logo-texts-container">
                                <img src={fclLogo} className="fcl-logo" alt="" />
                                <div className="fcl-texts-container">
                                    <p className="fcl-text"> Future <br /> Classroom Lab </p>
                                    <p className="fcl-bottom-text"> By European Schoolnet </p>
                                </div>
                            </div>
                        )
                    }
                    {
                         location.pathname === "/admin" && (
                            <div className="fcl-admin-logo-container">
                                <img src={adminLogo} alt="" className="fcl-admin-logo" />
                                <div className="admin-dropdown-container">
                                   <p className="admin-log-out-p" onClick={() => adminLogOut()}> Çıkış Yap </p>
                                    <div className="admin-log-out-arrow-container">
                                     <LogOutArrow width={30} height={30} fill="black" stroke="black"/>
                                    </div>
                                </div>
                            </div>
                         )
                    }
                </div>

                <div className="hamburger-container" onClick={sidebarOpener}>
                    <HamburgerMenu />
                </div>
            </div>
        </>
    );
}

export default Navbar;
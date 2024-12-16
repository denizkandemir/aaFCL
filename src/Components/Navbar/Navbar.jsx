import "./Navbar.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-p-container">
               <Link  className="link-p"  to={"/"} ><img src={okulLogo} className="school-logo" alt="" /></Link>
            </div>

            <div className="navbar-center-container">
                <ul className="navbar-links-container">
                    <Link  className="link-p"  to={"/fclNedir"}> <li className="navbar-link"> FCL Nedir </li> </Link>
                    <Link  className="link-p"  to={"/öğrenmeAlanlarımız"}> <li className="navbar-link"> Öğrenme Alanlarımız </li></Link>
                    <Link  className="link-p"  to={"/etkinliklerimiz"}><li className="navbar-link"> Etkinliklerimiz </li></Link>
                    <Link  className="link-p"  to={"/iletişim"}><li className="navbar-link"> İletişim  </li></Link>
                    {/* <li className="navbar-link"></li> */}
                </ul>
            </div>

            <div className="navbar-right-logo-container">
                <img src={bakanlıkLogo} className="ministery-logo" alt="" />
                <div className="fcl-logo-texts-container">
                    <img src={fclLogo} className="fcl-logo" alt="" />
                    <div className="fcl-texts-container">
                        <p className="fcl-text"> Future <br /> Classroom Lab </p>
                        <p className="fcl-bottom-text"> By European Schoolnet </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
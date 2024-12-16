import "./Navbar.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-p-container">
                <img src={okulLogo} className="school-logo" alt="" />
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

            <div className="navbar-center-container">
                <ul className="navbar-links-container">
                    <li className="navbar-link"> FCL Nedir </li>
                    <li className="navbar-link"> Öğrenme Alanlarımız </li>
                    <li className="navbar-link"> Etkinliklerimiz </li>
                    <li className="navbar-link"> İletişim  </li>
                    {/* <li className="navbar-link"></li> */}
                </ul>
            </div>

           {/* <div className="navbar-right-logo-container">
                    <img src={bakanlıkLogo} className="ministery-logo" alt="" />
                    <div className="fcl-logo-texts-container">
                        <img src={fclLogo} className="fcl-logo" alt="" />
                        <div className="fcl-texts-container">
                            <p className="fcl-text"> Future <br /> Classroom Lab </p>
                            <p className="fcl-bottom-text"> By European Schoolnet </p>
                        </div>
                    </div>
                </div> */}
        </div>
    );
}

export default Navbar;
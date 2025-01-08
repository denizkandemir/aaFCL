import "./HeaderNavbar.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";
import { Link }  from "react-router-dom";
import LearningPlaces from "../../objects/LearningPlaces";

const HeaderNavbar = () => {
    return (
        <div className="headerNavbar-container">
            <div className="headerNavbar-logo-p-container">
               <img src={bakanlıkLogo} className="ministery-logo" alt="" />
                <div className="headerNavbar-right-logo-container">
                    <img src={okulLogo} className="school-logo" alt="" />
                    <div className="fcl-logo-texts-container">
                        <img src={fclLogo} className="fcl-logo" alt="" />
                        <div className="fcl-texts-container">
                            <p className="fcl-text"> Future <br /> Classroom Lab </p>
                            <p className="fcl-bottom-text"> By European Schoolnet </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="headerNavbar-center-container">
                <ul className="headerNavbar-links-container">
                    <Link  className="link-p" to={"/fclNedir"}> <li className="headerNavbar-link"> FCL Nedir </li> </Link>
                    <div className="link-dropdown-container">
                            <li className="headerNavbar-link learning-link"> Öğrenme Alanlarımız </li>
                            <div className="learning-dropdown-container">
                                {
                                    LearningPlaces.map((place) => (
                                        <Link key={place.id} to={{
                                            pathname: `${place.path}/${place.id}`,
                                        }} >
                                            <div className="learning-dropdown-wrapper">
                                                 <p className="navbar-learning-titl"> {place.title} </p> 
                                                 <img src={place.svg} alt="" className="navbar-learning-svg" />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    <Link  className="link-p" to={"/etkinliklerimiz"}><li className="headerNavbar-link"> Etkinliklerimiz </li></Link>
                    <Link  className="link-p" to={"/iletişim"}><li className="headerNavbar-link"> İletişim  </li></Link>
                    {/* <li className="headerNavbar-link"></li> */}
                </ul>
            </div>
        </div>
    );
}

export default HeaderNavbar;
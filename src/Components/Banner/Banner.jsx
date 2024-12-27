import "./Banner.scss"
import { Link } from "react-router-dom";
import LeftArrow from "../../svgs/LeftArrow";


const Banner = ({text,img,location,responsiveImg}) => {
    return (
        <div className="banner-img-title-container">
            <h2 className="banner-title"> {text} </h2>
            <div className="banner-img-texts-container">
                <div className="link-arrow-container">
                  <LeftArrow/> 
                  <Link to={"/"} className="banner-link"> Ana Sayfa </Link>
                </div>
                <p className="banner-p"> / </p>
                <p className="banner-p"> {location} </p>
            </div>
            <div className="banner-img-container">
                <img src={img} alt="" className="banner-img" />
                <img src={responsiveImg} className="banner-responsive-img" alt="" /> 
            </div>
        </div>
    )
}

export default Banner;
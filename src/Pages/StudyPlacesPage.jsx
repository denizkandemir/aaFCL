import Banner from "../Components/Banner/Banner";
import learningImg from "/learningPlaces1.png";
import learningImgResponsive from "/learningPlacesResponsive.png";
import FCLPlaces from "../Components/FCLPlaces/FCLPlaces";
import { useEffect } from "react";

const StudyPlacesPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
           <Banner img={learningImg} location={"Öğrenme Alanlarımız"} responsiveImg={learningImgResponsive} text={"FCL Öğrenme Alanları"}/>
           {/* <div className="error-p-container" style={{ height: "500px",display:"flex" ,justifyContent:"center" , alignItems:"center",padding:"140px" }}>
             <p className="error-p" style={{ fontSize: "40px", maxWidth: "400px",textAlign:"center" }}> Bu Sayfa Çok Yakında Sizlerle Olucak </p>
           </div> */}
           <FCLPlaces/>
        </>
    )

}

export default StudyPlacesPage;
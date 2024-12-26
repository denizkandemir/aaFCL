import Banner from "../Components/Banner/Banner";
import learningImg from "/learningPlaces1.png";

const StudyPlacesPage = () => {
    return (
        <>
           <Banner img={learningImg} location={"Öğrenme Alanlarımız"} text={"Smyrna FCL Öğrenme Alanları"}/>
           <div className="error-p-container" style={{ height: "500px",display:"flex" ,justifyContent:"center" , alignItems:"center",padding:"140px" }}>
             <p className="error-p" style={{ fontSize: "40px", maxWidth: "400px",textAlign:"center" }}> Bu Sayfa Çok Yakında Sizlerle Olucak </p>
           </div>
        </>
    )

}

export default StudyPlacesPage;
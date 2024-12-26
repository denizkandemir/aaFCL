import Banner from "../Components/Banner/Banner";
import eventsImg from "/learningPlaces6.png";

const EventsPage = () => {
    return (
        <>
              <Banner img={eventsImg} location={"Etkinliklerimiz"} text={"Smyrna FCL Etkinlikleri"}/>
           <div className="error-p-container" style={{ height: "500px",display:"flex" ,justifyContent:"center" , alignItems:"center",padding:"140px" }}>
             <p className="error-p" style={{ fontSize: "40px", maxWidth: "400px",textAlign:"center" }}> Bu Sayfa Çok Yakında Sizlerle Olucak </p>
           </div>
        </>
    )
}

export default EventsPage;
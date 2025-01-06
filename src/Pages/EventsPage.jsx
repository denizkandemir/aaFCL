import Banner from "../Components/Banner/Banner";
import eventsImg from "/learningPlaces6.png";
import { useEffect } from "react";
import EventsContent from "../Components/Events/EventsContent";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
        <>
            <Banner img={eventsImg} responsiveImg={eventsImg} location={"Etkinliklerimiz"} text={"Smyrna FCL Etkinlikleri"}/>
            <EventsContent/>
        </>
    )
}

export default EventsPage;
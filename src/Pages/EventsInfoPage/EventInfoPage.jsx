import EventInfo from "../../Components/EventInfo/EventInfo";
import "./EventInfoPage.scss"
import { useState,useEffect } from "react";

const EventInfoPage = () => {

    const [isEventSlideOpen, setEventSlideOpen] = useState(false);
      const root = document.querySelector("#root");
    
      if (isEventSlideOpen) {
        document.body.classList.add("no-scroll");
        root.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
        root.classList.remove("no-scroll");
      }
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div
                className={"event-info-page-container"}>
                <div className={isEventSlideOpen
                    ? "event-dark-open"
                    : "event-dark-close"}></div>
                <EventInfo isEventSlideOpen={isEventSlideOpen} setEventSlideOpen={setEventSlideOpen} />
            </div>
        </>

    )
}

export default EventInfoPage;
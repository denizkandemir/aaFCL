
import FCLPlaces from "../../Components/FCLPlaces/FCLPlaces";
import { useEffect } from "react";
import { useState } from "react";
import "./StudyPlacesPage.scss"

const StudyPlacesPage = () => {

  const [isFclSlideOpen, setFclSlideOpen] = useState(false);
  const root = document.querySelector("#root");

  if (isFclSlideOpen) {
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
        className={"study-places-page-container"}>
        <div className={isFclSlideOpen
          ? "learning-places-dark-open"
          : "learning-places-dark-close"}></div>
        <FCLPlaces isFclSlideOpen={isFclSlideOpen} setFclSlideOpen={setFclSlideOpen} />
      </div>
    </>
  )

}

export default StudyPlacesPage;
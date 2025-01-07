
import FCLPlaces from "../../Components/FCLPlaces/FCLPlaces";
import { useEffect } from "react";
import { useState } from "react";
import "./StudyPlacesPage.scss"

const StudyPlacesPage = () => {

  const [isSlideOpen, setSlideOpen] = useState(false);
  const root = document.querySelector("#root");

  // if (isSlideOpen) {
  //     document.body.classList.add("no-scroll");
  //     root.classList.add("no-scroll");
  // } else {
  //     document.body.classList.remove("no-scroll");
  //     root.classList.remove("no-scroll");
  // }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className={"study-places-page-container" }>
        <div className={   isSlideOpen 
                        ? "learning-places-dark-open"
                        : "learning-places-dark-close"}></div>
        <FCLPlaces isSlideOpen={isSlideOpen} setSlideOpen={setSlideOpen}   />
      </div>
    </>
  )

}

export default StudyPlacesPage;
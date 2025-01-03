import Banner from "../../Components/Banner/Banner";
import learningImg from "/learningPlaces1.png";
import learningImgResponsive from "/learningPlacesResponsive.png";
import FCLPlaces from "../../Components/FCLPlaces/FCLPlaces";
import { useEffect } from "react";
import { useState } from "react";
import "./StudyPlacesPage.scss"

const StudyPlacesPage = () => {

  const [isSlideOpen, setSlideOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="study-places-page-container">
        <Banner img={learningImg} location={"Öğrenme Alanlarımız"} responsiveImg={learningImgResponsive} text={"FCL Öğrenme Alanları"} />
        <div className={isSlideOpen ? "learning-places-dark-open" : "learning-places-dark-close"}></div>
        <FCLPlaces isSlideOpen={isSlideOpen} setSlideOpen={setSlideOpen} />
      </div>
    </>
  )

}

export default StudyPlacesPage;
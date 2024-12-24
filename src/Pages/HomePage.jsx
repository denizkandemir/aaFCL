import Header from "../Components/Header/Header";
import SmyrnaForce from "../Components/SmyrnaForce/SmyrnaForce";
import HomepageCollage from "../Components/HomepageCollage/HomepageCollage";
import Slide from "../Components/Slider/Slider";
import HomePageContact from "../Components/HomepageContact/HomePageContact";
import HomepageCards from "../Components/HomepageCards/HomepageCards";

const HomePage = () => {
 return (
    <>
      <Header/>
      <SmyrnaForce/> 
      <HomepageCollage/>
      <HomepageCards/>
      <HomePageContact/>
      <Slide/>
     
    </>
 )
}

export default HomePage;
import Header from "../Components/Header/Header";
import SmyrnaForce from "../Components/SmyrnaForce/SmyrnaForce";
import HomepageCollage from "../Components/HomepageCollage/HomepageCollage";
import Slide from "../Components/Slider/Slider";
import HomePageContact from "../Components/HomepageContact/HomePageContact";
import HomepageCards from "../Components/HomepageCards/HomepageCards";
import React, { useState, useEffect } from "react";
import ResponsiveHeader from "../Components/ResponsiveHeader/ResponsiveHeader";
  
const HomePage = () => {  
 return (

    <>
      <Header/>          
      <ResponsiveHeader/>
      <SmyrnaForce/> 
      <HomepageCollage/>
      <HomepageCards/>
      <HomePageContact/>
    </>
 )
}

export default HomePage;
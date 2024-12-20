import educationImg from "/aafcl-education.png";
import Banner from "../Components/Banner/Banner";
import ProjectGoals from "../Components/ProjectGoals/ProjectGoals";
import FCL_map from "../Components/FCL_map/FCL_map";
import FCL_BottomBanner from "../Components/FCL_BottomBanner/FCL_BottomBanner";

const FCLPage = () => {
    return (
        <>
         <Banner img={educationImg} text={"Future Class Lab"} location={"FCL Nedir"} />
         <FCL_map/>
         <ProjectGoals/>
         <FCL_BottomBanner/>
        </>
    )
}

export default FCLPage;
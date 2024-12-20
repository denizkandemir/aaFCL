import educationImg from "/aafcl-education.png";
import Banner from "../Components/Banner/Banner";
import ProjectGoals from "../Components/ProjectGoals/ProjectGoals";

const FCLPage = () => {
    return (
        <>
         <Banner img={educationImg} text={"Future Class Lab"} location={"FCL Nedir"} />
         <ProjectGoals/>

        </>
    )
}

export default FCLPage;
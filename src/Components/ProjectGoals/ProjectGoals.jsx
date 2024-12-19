import "./ProjectGoals.scss";
import goalsImg from "/aafcl-goals.png";
import Goals from "../../objects/Goals";

const ProjectGoals = () => {
    return (
        <>
            <div className="project-goals-container">
                <div className="project-goals-content-container">


                    <div class="project-goals-arrow-container">
                        <div className="project-titles-container">
                            <h5 className="project-little-title"> FCL Nedir </h5>
                            <h3 className="project-title"> Projenin Hedefleri </h3>
                        </div>
                        {
                            Goals.map((goal) => (
                                <div key={goal.id} class="project-goals-arrow">
                                    <img src={goal.svg} class="project-icon"/> 
                                    <div class="content">
                                        <h3> {goal.title} </h3>
                                        <p className="project-p"> {goal.text} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="goals-img-container">
                        {/* <div className="project-titles-container">
                            <h5 className="project-little-title"> FCL Nedir </h5>
                            <h3 className="project-title"> Projenin Hedefleri </h3>
                        </div> */}
                        <img src={goalsImg} alt="" className="goals-img" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProjectGoals;
import "./ProjectGoals.scss";
import goalsImg from "/aafcl-goals.png";
import Goals from "../../objects/Goals";
import circle from "/goalCircle.png";

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
                                    <div className="circle-id-container">
                                     <div className="circle-container">
                                        <img src={circle} alt="" className="circle-img" />
                                     </div>
                                     <p className="project-icon">{goal.id}</p>
                                    </div>
                                    <div class="goal-content">
                                        <h3 className="project-goal-title"> {goal.title} </h3>
                                        <p className="project-p"> {goal.text} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="goals-img-container">
                        <img src={goalsImg} alt="" className="goals-img" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProjectGoals;
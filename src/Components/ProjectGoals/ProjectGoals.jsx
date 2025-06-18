import "./ProjectGoals.scss";
import goalsImg from "/aafcl-goals.png";
import Goals from "../../objects/Goals";
import circle from "/goalCircle.png";
import useFadeInOnScroll from "../../hooks/animation/Animation";

const ProjectGoals = () => {
    useFadeInOnScroll();
    return (
        <>
            <div className="project-goals-container">
                <div className="project-goals-content-container">
                    <div className="project-goals-arrow-container">
                        <div className="project-titles-container ">
                            <h5 className="project-little-title fade-in"> FCL Nedir </h5>
                            <h3 className="project-title fade-in"> Projenin Hedefleri </h3>
                        </div>
                        {
                            Goals.map((goal) => (
                                <div key={goal.id} className="project-goals-arrow fade-in">
                                    <div className="circle-id-container">
                                     <div className="circle-container">
                                        <img src={circle} alt="" className="circle-img" />
                                     </div>
                                     <p className="project-icon">{goal.id}</p>
                                    </div>
                                    <div className="goal-content">
                                        <h3 className="project-goal-title"> {goal.title} </h3>
                                        <p className="project-p"> {goal.text} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="goals-img-container fade-in-right">
                        <img src={goalsImg} alt="" className="goals-img" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProjectGoals;
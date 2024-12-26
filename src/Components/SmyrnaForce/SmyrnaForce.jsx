import "./SmyrnaForce.scss";
import SmyrnaProject from "../../objects/SmyrnaProject";

const SmyrnaForce = () => {
    return (
        <div className="smyrna-container">
            <div className="smyrna-content-container">
                <div className="smyrna-titles-container">
                    <h2 className="smyrna-title">Smyrna Force</h2>
                    <p className="smyrna-p"> Adını antik İzmir'den alan projemiz ile geleceğe ışık tutuyoruz</p>
                </div>

                <div className="row margin-top timeline smyrna-big-screen">
                    {
                        SmyrnaProject.map((project) => (
                            <div key={project.id} className="col-one-fourth">
                                <div className="smyrna-details-container">
                                    <h5> {project.title} </h5>
                                    <p> {project.text} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row margin-top smyrna-little-screen">
                    <div className="timeline">
                    {
                        SmyrnaProject.map((project) => (
                            <div key={project.id} className="col-one-fourth">
                                <div className="smyrna-details-container">
                                    <h5> {project.title} </h5>
                                    <p> {project.text} </p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmyrnaForce;
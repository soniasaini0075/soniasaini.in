import "./projects.scss";

import designbyprateek from "../../assets/images/projects/designbyprateek.png";
import modl from "../../assets/images/projects/modl.png";
import mymoneymantra from "../../assets/images/projects/mymoneymantra.png";
import onething from "../../assets/images/projects/onething.png";
import posable from "../../assets/images/projects/posable.png";
import prescinto from "../../assets/images/projects/prescinto.png";

import projectArrow from "../../assets/images/icons/project-arrow.svg";

const ClientGrid = ({ partnerHeading }) => {
    return (
    <>
    <div className="projects-wrapper-home">
        <div className="projects-main-div">
            <a href="https://onething.design/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={onething} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>Onething Design Studio</h4>
                        <p>Onething - Leading Global UI UX Design Agency</p>
                    </div>
                </div>
            </a>
            <a href="https://designsbyprateek.com/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={designbyprateek} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>Designs by Prateek</h4>
                        <p>Designer Portfolio Website</p>
                    </div>
                </div>
            </a>
            <a href="https://www.mymoneymantra.com/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={mymoneymantra} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>MyMoneyMantra</h4>
                        <p>Never worry about money again</p>
                    </div>
                </div>
            </a>
            <a href="https://prescinto.ai/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={prescinto} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>Prescinto</h4>
                        <p>Reimagining the future of Clean Energy Analytics</p>
                    </div>
                </div>
            </a>
            <a href="https://posable.onething.design/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={posable} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>POSable</h4>
                        <p>Your Customized Dashboard</p>
                    </div>
                </div>
            </a>
            <a href="https://modl.ai/" target="_blank" data-cursor-img={projectArrow}>
                <div className="project-card">
                    <figure>
                        <img src={modl} alt="Arrow Icon" />
                    </figure>
                    <div className="description">
                        <h4>modl AI</h4>
                        <p>Unleash an army of AI and ML bots</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </>
    );
};

export default ClientGrid;
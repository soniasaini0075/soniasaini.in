import "./about.scss";

import { useEffect } from "react";

import soniaAbout from "../../assets/images/about/sonia.png";
import itmearrow from "../../assets/images/icons/itmearrow.svg";

const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
  }, []);
  
  return (
  <>
  <div className="about-page-wrapper page-wrapper">
    <div className="page-container">
      <div className="page-intro-wrapper">
        <div className="page-intro-name span-light">
          <span>About</span>
        </div>
        <h2>Hello, there! My name is Sonia Saini.<br/>
          I am a Executive-Web Developer currently based<br/> in Delhi, India.</h2>
          <p>Besides creating digital stuff, I like to code and  develop web pages as well as mobile apps.</p>
          <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me.</p>
        </div>
        <div className="about-me-cards">
          <div className="about-card about-detail">
            <div className="flex-wrapper">
              <div className="span-light">
                <span>About</span>
                <p>Executive-Web Developer</p>
              </div>
              <div className="span-light">
                <span>Experience</span>
                <p>5+ Years</p>
              </div>
            </div>
            <div className="span-light">
              <span>Current Company</span>
              <p>1Thing Design & innovation Pvt. Ltd.</p>
            </div>
            <div className="span-light">
              <span>Degree</span>
              <p>Bachelor of Technology</p>
            </div>
          </div>
          <div className="about-card about-photo">
            <figure>
              <img className="it-me-arrow" src={itmearrow} alt="Code by Sonia : Logo" />
              <img src={soniaAbout} alt="Code by Sonia : Logo" />
            </figure>
          </div>
          <div className="about-card about-contact">
            <div className="card-details">
              <div className="span-light">
                <span>Email</span>
                <p>
                  <a className="mail-link" href="mailto:thesonia07@gmail.com">
                    thesonia07@gmail.com
                  </a>
                </p>
              </div>
              <div className="span-light">
                <span>Location</span>
                <p>
                  Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="credits-wrapper">
          <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React.js and SCSS, deployed with Digital Ocean. All text is set in the "JetBrains Mono" and "Mona Sans" typeface.</p>
        </div>
      </div>
    </div>
    </>
    );
  };
  export default About;

import "./contact.scss";

import { useEffect } from "react";

import arrow from "../../assets/images/icons/arrow.svg";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("contact-page");
  }, []);
  
  return (
    <>
    <div className="contact-page-wrapper page-wrapper">
      <div className="page-container">
      <div className="page-intro-wrapper">
        <div className="page-intro-name span-light">
          <span>Contact</span>
        </div>
        </div>
        <div className="contact-card-social">
          <div className="links-social">
            <ul>
              <li><a href="https://www.linkedin.com/in/thesonia07/" target="_blank">Linkedin <img src={arrow} alt="Arrow Icon" /></a></li>
              <li><a href="https://github.com/soniasaini0075" target="_blank">Github <img src={arrow} alt="Arrow Icon" /></a></li>
              <li><a href="https://join.skype.com/invite/yyamyQab8pZ3" target="_blank">Skype <img src={arrow} alt="Arrow Icon" /></a></li>
              <li><a href="https://medium.com/@thesonia07" target="_blank">Medium <img src={arrow} alt="Arrow Icon" /></a></li>
              <li><a href="https://t.me/thesonia07" target="_blank">Telegram <img src={arrow} alt="Arrow Icon" /></a></li>
            </ul>
          </div>
          <div className="contact-email">
            <div className="page-intro-name span-light">
              <span>Email</span>
            </div>
            <div className="content_contact-email">
              <h3>Please write only for work</h3>
              <p><a className="mail-link" href="mailto:thesonia07@gmail.com">thesonia07@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Contact;

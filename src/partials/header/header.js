import { useEffect,  useState } from "react";
import { TypeAnimation } from 'react-type-animation';

import "./header.scss";

import logo from "../../assets/images/logo/logo.svg";

function Header() {
  useEffect(() => {}, []);

  return (
    <>
    <header className="header">
      <div className="logo-wrapper">
        <span>codebysonia</span>
        <img src={logo} alt="Code by Sonia : Logo" />
      </div>
      <div className="intro-pointers">
        <h3>
          I build things for the
          <span>Web</span>
        </h3>
      </div>
      <div className="follow-cta-wrapper">
        <span>Follow me on</span>
        <ul>
          <li><a className="link-cta" href="https://github.com/soniasaini0075" target="_blank">Github</a></li>
          <li><a className="link-cta" href="https://www.linkedin.com/in/thesonia07/" target="_blank">Linkedin</a></li>
          <li><a className="link-cta" href="https://codepen.io/soniasaini0075" target="_blank">Codepen</a></li>
        </ul>
      </div>
      {/*<TypeAnimation
      sequence={[
        'Frontend', 1000,
        'Custom Wordpress', 1000,
        'Three', 1000,
        'Three',
        () => {
          // console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={1}
    />*/}
    </header>
    </>
    );
}
export default Header;

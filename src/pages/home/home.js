// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

import { useEffect } from "react";
import TypeAnimation from "react-type-animation";

import "./home.scss";

import Projects from "../../partials/projects/projects";

// import logo from "../../assets/images/logo/logo.svg";


function Home() {

useEffect(() => {
	document.body.classList.add("home-page");
});


return (
<>
<div className="homepage-wrapper">
	<Projects />
</div>
</>
);
}

export default Home;
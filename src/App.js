import { useEffect, useRef, useLayoutEffect } from "react";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import MouseFollower from "mouse-follower";

import logo from './logo.svg';

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

// Partials
import Header from "./partials/header/header";
import Footer from "./partials/footer/footer";
import PageNotFound from "./pages/pagenotfound/error";
import ScrollToTop from "./partials/scroll-to-top/scroll-to-top";
// import Cursor from "./widgets/cursor/cursor";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mouse-follower/src/scss/index.scss';

const App = () => {
  const containerRef = useRef(null);
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower();

  useEffect(() => {
    window.scroll({behavior:'smooth'})
  }, []);

  return (
  <div className="codebysonia-wrapper" ref={containerRef}>
  {/*<Cursor cursor={cursor} />*/}
    <BrowserRouter basename={"/"}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home appRef={containerRef}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
</div>
);
};

const Layout = () => {
  const containerRef = useRef(null);
  return (
  <>
  <div className="main-app">
    <div className="side-left">
      <Header />
      <Footer />
    </div>
    <div className="side-right">
      <Outlet />
    </div>
  </div>
  </>
  );
};

export default App;

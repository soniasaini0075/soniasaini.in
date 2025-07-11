import { useState, useEffect, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./footer.scss";

function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <ul>
          <li className="bttn-round">
            <NavLink to="/" className="nav-link">
              <span>Work</span>
            </NavLink>
          </li>
          <li className="bttn-round">
            <NavLink to="/about" className="nav-link">
              <span>About</span>
            </NavLink>
          </li>
          <li className="bttn-round">
            <NavLink to="/contact" className="nav-link">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/*<p>&copy; {date} Code by Sonia. All rights reserved.</p>*/}
    </footer>
    </>
    );
}
export default Footer;

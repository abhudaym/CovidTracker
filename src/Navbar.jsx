import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light " style={{backgroundColor: 'transparent'}}>
      <div className="container">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto ml-auto">
            {/* <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <span className="link-name py-1">Home</span>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/india" className="nav-link">
                <span className="link-name py-1">Indian Stats</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <span className="link-name py-1">Global Stats</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/team" className="nav-link">
                <span className="link-name py-1">Developers</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

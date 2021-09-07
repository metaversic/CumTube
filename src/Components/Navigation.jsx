import React, { useState } from "react";

import DesktopSeach from "./DesktopSeach";

import { Link, NavLink } from "react-router-dom";

// importing logos
import Logo2 from "./images/logo2.png";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav
      className="nav
    .bar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top"
    >
      <Link className="navbar-brand mr-1" to="/">
        <img className="img-fluid" alt="" src={Logo2} />
      </Link>
      <DesktopSeach />
      <button
        className="btn menu-btn btn-link btn-sm text-secondary order-1 order-sm-0"
        onClick={(e) => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
      <ul className={`sidebar navbar-nav ${isNavOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/"
            exact
            onClick={(e) => setIsNavOpen(!isNavOpen)}
          >
            <i className="fas fa-fw fa-home"></i>
            <span>Home</span>
          </NavLink>
        </li>
      </ul>
      <div
        className={`bg-wrapper ${isNavOpen ? "open" : ""}`}
        onClick={(e) => setIsNavOpen(!isNavOpen)}
      ></div>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiReply } from "react-icons/hi";
import "./Navbar.css";

const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Function to determine if a NavLink should be active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <header data-aos="fade-down" data-aos-duration="300" className="sticky">
        {location.pathname !== "/" && ( // Conditionally render back button if not on home page
          <NavLink
          to="/"
          className={`button rounded ${isActive("/")}`}
          onClick={() => window.history.back()}
        >  
          <HiReply />
          <span> </span>
          Back
        </NavLink>
        )}
        
        <NavLink
          data-aos="fade-down"
          data-aos-duration="400"
          to="/"
          className={`button rounded ${isActive("/")}`}
          onClick={() => handleButtonClick("home")}
        >
          <span
            className={`icon-home ${isActive("/") ? "" : "inverse"}`}
          ></span>
          <span className={isActive("/") ? "text-black" : ""}>
            Home
          </span>
        </NavLink>

        <NavLink
          data-aos="fade-down"
          data-aos-duration="500"
          to="/about"
          className={`button rounded ${isActive("/about")}`}
          onClick={() => handleButtonClick("about")}
        >
          <span
            className={`icon-info ${isActive("/about") ? "" : "inverse"}`}
          ></span>
          <span className={isActive("/about") ? "text-black" : ""}>
            About
          </span>
        </NavLink>

        <NavLink
          data-aos="fade-down"
          data-aos-duration="700"
          to="/create"
          className={`button rounded ${isActive("/create")}`}
          onClick={() => handleButtonClick("create")}
        >
          <span
            className={`icon-upload ${isActive("/create") ? "" : "inverse"}`}
          ></span>
          <span className={isActive("/create") ? "text-black" : ""}>
            Create
          </span>
        </NavLink>

        <NavLink
          data-aos="fade-down"
          data-aos-duration="700"
          to="/search"
          className={`button rounded ${isActive("/search")}`}
          onClick={() => handleButtonClick("search")}
        >
          <span
            className={`icon-search ${isActive("/search") ? "" : "inverse"}`}
          ></span>
          <span className={isActive("/search") ? "text-black" : ""}>
            Search
          </span>
        </NavLink>
      </header>
    </>
  );
};

export default Nav;

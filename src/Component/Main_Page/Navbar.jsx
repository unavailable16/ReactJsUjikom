import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiReply } from "react-icons/hi";
import { useAuth } from "./AuthContext"; // Import AuthContext
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, username } = useAuth(); // Gunakan hook useAuth untuk mengakses status login dan nama pengguna
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <header data-aos="fade-down" data-aos-duration="300" className="sticky">
        {location.pathname !== "/" && (
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
        >
          <span
            className={`icon-search ${isActive("/search") ? "" : "inverse"}`}
          ></span>
          <span className={isActive("/search") ? "text-black" : ""}>
            Search
          </span>
        </NavLink>

        {/* Tampilkan nama pengguna jika sudah login */}
        {isLoggedIn && (
          <span className="username">Welcome, {username}</span>
        )}
      </header>
    </>
  );
};

export default Navbar;

// import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/AdminPanelAssets/nav-logo.svg";
import navprofile from "../../assets/AdminPanelAssets/nav-profile.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Navigation Logo" className="navlogo" />
      <img src={navprofile} alt="Navigation Logo" className="navprofile" />
    </div>
  );
}

export default Navbar;

// Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Box } from "@mui/material";

function NavigationBar() {
  return (
    <Box className="navbar">
      <Box className="logo">
        <Box
          component="img"
          alt="Company logo consisting of three blue buildings and the name Next Level Builders"
          src="/NL_Horizontal_RGB (1).png"
          className="logoImg"
        />
      </Box>
      <Box className="links">
        {/* Define navigation links */}
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact Us
        </NavLink>
      </Box>
    </Box>
  );
}

export default NavigationBar;

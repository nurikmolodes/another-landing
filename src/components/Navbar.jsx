import React, { useState } from "react";
import "../styles/Navbar.scss";
import { useNavigate } from "react-router-dom";
import upperVector from "../assets/upperVector.svg";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={upperVector} className="upperVector" />
      <span>Logo</span>
      <div className="buttons">
        <button
          className={activeButton === "Home" && "active"}
          onClick={() => {
            setActiveButton("Home");
            navigate("/");
          }}>
          Home
        </button>
        <button
          className={activeButton === "About" && "active"}
          onClick={() => {
            setActiveButton("About");
            navigate("/about");
          }}>
          About
        </button>
      </div>
    </div>
  );
};

export default Navbar;

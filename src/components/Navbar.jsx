import React, { useEffect, useState } from "react";
import "../styles/components/Navbar.scss";
import { useNavigate } from "react-router-dom";
import upperVector from "../assets/upperVector.svg";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Home");
  useEffect(() => {
    const activeRoute = localStorage.getItem("activeRoute");
    if (activeRoute) {
      setActiveButton(activeRoute);
    }
  }, []);
  const navigate = useNavigate();
  const handleClick = (active, route) => {
    setActiveButton(active);
    localStorage.setItem("activeRoute", active);
    navigate(`${route}`);
  };
  return (
    <div className="navbar">
      <img src={upperVector} className="upperVector" />
      <span>Logo</span>
      <div className="buttons">
        <button
          className={activeButton === "Home" && "active"}
          onClick={() => {
            handleClick("Home", "/");
          }}>
          Home
        </button>
        <button
          className={activeButton === "About" && "active"}
          onClick={() => {
            handleClick("About", "/about");
          }}>
          About
        </button>
      </div>
    </div>
  );
};

export default Navbar;

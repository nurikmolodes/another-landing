import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Logo</span>
      <div className="buttons">
        <button>Home</button>
        <button>About</button>
      </div>
    </div>
  );
};

export default Navbar;

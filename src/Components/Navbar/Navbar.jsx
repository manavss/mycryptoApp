import React from "react";
import { FaCoins } from "react-icons/fa";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Trending <span className="purple">Cryptos</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;

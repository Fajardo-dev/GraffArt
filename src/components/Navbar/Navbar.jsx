import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li>
          <Link to="/Gallery">
            <img src="/icons/search.png" alt="" />
          </Link>
        </li>
        <ul>
          <li>
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h1>Urban</h1>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <h3>Gallery</h3>
            </Link>
          </li>
        </ul>
        <li>
          <Link to="/login">
            <img src="/icons/user.png" alt="" />
          </Link>
        </li>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Sparrow</h1>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/account">
            <li>Account</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/updateoffer">
            <li>Update Offer</li>
          </Link>
          <Link to="/promote">
            <li>Promote</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

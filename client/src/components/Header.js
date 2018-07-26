import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              (window.location.pathname === "/" || window.location.pathname === "/home") ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
            }
          >
            Saved
          </Link>
        </li>
      </ul>
    </nav>
    <header className="App-header jumbotron-fluid">
      <h1 className="App-title">New York Times Article Scrubber</h1>
      <p>Search articles of interest!</p>
    </header>
  </div>
);

export default Header;

import React from "react";
import logo from "./hummingbird_logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ currentSearch, onChange, onClick }) => {
  return (
    <nav className="navbar navbar-expand-lg nnavbar-dark bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="The humming bird hums away happily"
          className="logo"
        />
      </Link>
      <SearchBar
        onChange={onChange}
        onClick={onClick}
        currentSearch={currentSearch}
      />

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

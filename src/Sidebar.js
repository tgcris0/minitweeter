import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="homeButton">
        <Link to="/">Home</Link>
      </div>
      <div className="userButton">
        <Link to="/myProfile">My Profile</Link>
      </div>
    </>
  );
};

export default SideBar;

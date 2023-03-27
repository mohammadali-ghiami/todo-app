import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item m-3">
          <Link to="/" className={`nav-link bg-dark`}>
            Todo App
          </Link>
        </li>
        <li className="nav-item m-3">
          <Link to="/about" className="nav-link ">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

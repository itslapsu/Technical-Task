import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <ul className="item-list">
          <li className="item">
            <NavLink className="link" to={"/task3"}>
              Task 3
            </NavLink>
          </li>
          <li className="item">
            <NavLink className="link" to={"/task4"}>
              Task 4
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

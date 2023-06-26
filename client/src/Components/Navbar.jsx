import React from "react";
import { NavbarData } from "./NavbarData";


const Navbar = () => {

  return (
    <nav className="navbar ">
      <ul className="navbarList">
        {NavbarData.map((item, index) => (
          <li
            key={index}
            className="row"
            id={window.location.pathname == item.link ? "active" : ""}
            onClick={() => {
              window.location.pathname = item.link;
            }} 
          >
            <div id="icon">{React.createElement(item.icon)}</div>
            <div id="title">{item.title}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

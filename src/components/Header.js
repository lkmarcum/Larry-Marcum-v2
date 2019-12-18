import React from "react";
import "./header.scss";
import cubes from "../cubes.png";

function Header(props) {
  console.log("header props: ", props);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={cubes} />
        <p>|</p>
        <div className="title-container">
          <h3>Larry Marcum</h3>
          <h5>Full-Stack Web Developer</h5>
        </div>
      </div>
      <div className="nav">
        <a href="#" onClick={props.pageHome}>
          Home
        </a>
        <a href="#" onClick={props.pageProjects}>
          Projects
        </a>
        <a href="#" onClick={props.pageContact}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Header;

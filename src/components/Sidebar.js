import React from "react";
import larry from "../larry.JPG";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Sidebar = () => {
  return (
    <div className="side">
      <img className="top-img" src={larry} alt="Larry Marcum" />
      <p>
        <strong>I am Larry</strong>, a Full-Stack Developer living in San
        Antonio, Texas.
      </p>
      <div className="link-container">
        <Icon color="grey" name="github" />
        <Icon color="grey" name="mail" />
        <Icon color="grey" name="twitter" />
      </div>
    </div>
  );
};

export default Sidebar;

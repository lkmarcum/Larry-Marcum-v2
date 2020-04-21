import React from "react";
import "./projects.scss";
import speakout from "../speakout.JPG";
import diy from "../diy.JPG";
import ghuser from "../ghuser.JPG";

function Projects(props) {
  return (
    <div className="projects">
      <div className="project-container">
        <img src={speakout} />
        <h3>Speak Out</h3>
        <div className="project-buttons">
          <a href="https://speakout-now.com/" target="_blank">
            <button>Visit the site</button>
          </a>
          <a
            href="https://github.com/Lambda-School-Labs/speak-out-fe"
            target="_blank"
          >
            <button>View the code</button>
          </a>
        </div>

        <p>
          A public application and administrative dashboard for an English
          language school in Bahrain.
        </p>
        <p>React | Redux | Axios | SASS | Node | Express | PostgreSQL</p>
        <ul>
          <li>
            Collaborated with a team of 8 as a full-stack developer over the
            course of two months
          </li>
          <li>
            Worked with stakeholder to ensure delivery of a useful and
            satisfactory product
          </li>
          <li>
            Migrated stakeholder's on-premise database to a hosted PostgreSQL
            solution
          </li>
        </ul>
      </div>
      <div className="project-container">
        <img src={ghuser} />
        <h3>GitHub User Info</h3>
        <div className="project-buttons">
          <a href="https://github-user-profile.netlify.app/" target="_blank">
            <button>Visit the site</button>
          </a>
          <a
            href="https://github.com/lkmarcum/Github-User-Info"
            target="_blank"
          >
            <button>View the code</button>
          </a>
        </div>
        <p>
          A simple, clean UI for displaying an informational overview for a
          user's GitHub profile.
        </p>
        <p>React | Axios | SASS </p>
        <ul>
          <li>
            Developed a serverless single-page application for exploring GitHub
            user data
          </li>
          <li>
            Utilized the GitHub API to fetch information related to selected
            user
          </li>
          <li>Deployed front-end using Netlify</li>
        </ul>
      </div>
      <div className="project-container">
        <img src={diy} />
        <h3>DIY Tracker</h3>
        <div className="project-buttons">
          <a href="https://diy-tracker-marketing.netlify.app/" target="_blank">
            <button>Visit the site</button>
          </a>
          <a href="https://github.com/DIY-Tracker" target="_blank">
            <button>View the code</button>
          </a>
        </div>
        <p>A CRUD application for managing personal DIY projects.</p>
        <p>React | Axios | Java | Spring | PostgreSQL</p>
        <ul>
          <li>
            Worked as a back-end developer for a multi-level team to construct a
            REST API over the course of four days
          </li>
          <li>
            Communicated with front-end developers to define API needs for the
            application
          </li>
          <li>Deployed back-end and database using Heroku</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;

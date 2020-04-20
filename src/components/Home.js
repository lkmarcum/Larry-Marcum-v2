import React from "react";
import "./home.scss";

function Home(props) {
  return (
    <div className="home-container">
      <h1>Hi, I'm Larry.</h1>
      <p>
        I'm a full-stack developer with a professional background in marketing.
        I'm focused on making meaningful contributions to my team and my own
        personal growth. I have an inherent drive to consistently provide value
        to both my stakeholders and end-users. I thrive working with
        cross-functional teams, and I live to seek out opportunities to improve
        my craft.
      </p>
      <button className="red-button">
        See my work &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;
      </button>
      <button>Contact me &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;</button>
    </div>
  );
}

export default Home;

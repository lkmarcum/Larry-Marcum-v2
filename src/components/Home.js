import React from "react";
import "./home.scss";

function Home(props) {
  return (
    <div className="home-container">
      <h1>One-liner here</h1>
      <p>Brief description about myself here.</p>
      <button className="red-button">
        See my work &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;
      </button>
      <button>Contact me &nbsp; &nbsp; &nbsp; &nbsp; &rsaquo;</button>
    </div>
  );
}

export default Home;

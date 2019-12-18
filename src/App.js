import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import mountains from "./mountains.jpg";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const pageHome = () => {
    setPage("home");
  };
  const pageProjects = () => {
    setPage("projects");
  };
  const pageContact = () => {
    setPage("contact");
  };

  return (
    <main>
      <div className="background-img">
        <img src={mountains} id="background" />
      </div>

      <Header
        pageHome={pageHome}
        pageProjects={pageProjects}
        pageContact={pageContact}
      />
      {page === "home" && <Home />}
    </main>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import mountains from "./mountains.jpg";
import "./App.css";
import Footer from "./components/Footer";

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
      {page === "home" && (
        <Home pageProjects={pageProjects} pageContact={pageContact} />
      )}
      {page === "contact" && <Contact />}
      {page === "projects" && <Projects />}
      <Footer />
    </main>
  );
}

export default App;

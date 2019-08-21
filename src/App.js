import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Sidebar />
    </main>
  );
}

export default App;

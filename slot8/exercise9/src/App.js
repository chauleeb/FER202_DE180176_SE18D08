// src/App.js
import React from "react";
import NameCard from "./NameCard";
import SimpleCard from "./SimpleCard";
import SimpleWebsite from "./SimpleWebsite";

function App() {
  return (
    <div className="container mt-4">
      <h2>Exercise 1</h2>
      <NameCard />

      <h2 className="mt-5">Exercise 4</h2>
      <SimpleCard />

      <h2 className="mt-5">Exercise 5</h2>
      <SimpleWebsite />
    </div>
  );
}

export default App;

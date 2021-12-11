import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import json from "./data/shirts.js";

function App() {
  return (
    <div className="App">
      <CardList cards={JSON.parse(json)} />
    </div>
  );
}

export default App;

import React from "react";
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";
import json from "./data/shirts.js";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <CardList cards={JSON.parse(json)} />
    </div>
  );
}

export default App;

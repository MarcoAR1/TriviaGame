import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PokemonCard from "./Components/PokemonCard.js";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <PokemonCard />
  </React.StrictMode>,
  document.getElementById("root")
);

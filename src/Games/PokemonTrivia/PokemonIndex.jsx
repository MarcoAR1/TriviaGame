import { React } from "react";
import PokemonCard from "./Components/PokemonCard";
import UseStyles from "../../StyleTheme/AllGameStyle.jsx";

function PokemonIndex() {
  const clases = UseStyles();
  return (
    <div className={clases.content}>
      <div className={clases.toolbar}></div>
      <PokemonCard />
    </div>
  );
}

export default PokemonIndex;

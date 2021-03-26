import { React } from "react";
import clsx from "clsx";
import PokemonCard from "./Components/PokemonCard";
import UseStyles from "../../StyleTheme/AllGameStyle.jsx";

function PokemonIndex(props) {
  const state = props.state;
  const clases = UseStyles();
  return (
    <div
      className={clsx(clases.content, {
        [clases.contentShift]: !state.open,
      })}
    >
      <div className={clases.drawerHeader}></div>
      <PokemonCard />
    </div>
  );
}

export default PokemonIndex;

import React from "react";
import NavBar from "./Components/NavBar.jsx";
import PokemonIndex from "./Games/PokemonTrivia/PokemonIndex.jsx";
import MenuOptions from "./Components/MenuOptions.jsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import { Hidden } from "@material-ui/core";
function AllGames() {
  const clases = UseStyles();
  return (
    <div className={clases.root}>
      <NavBar />
      <Hidden xsDown>
        <MenuOptions />
      </Hidden>
      <PokemonIndex />
    </div>
  );
}

export default AllGames;

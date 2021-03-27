import { React } from "react";
import PokemonCard from "./Components/PokemonCard";
import UseStyles from "../../StyleTheme/AllGameStyle.jsx";
import { Box } from "@material-ui/core";
import clsx from "clsx";

function PokemonIndex() {
  const clases = UseStyles();
  return (
    <Box className={clsx(clases.content, clases.contentShift)}>
      <div className={clases.drawerHeader}></div>
      <PokemonCard />
    </Box>
  );
}

export default PokemonIndex;

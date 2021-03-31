import { React } from "react";
import PokemonCard from "./Components/PokemonCard";
import UseStyles from "../../StyleTheme/AllGameStyle.jsx";
import { Box, Hidden } from "@material-ui/core";
import clsx from "clsx";
import RecordTable from "../../Components/RecordTable";

function PokemonIndex() {
  const clases = UseStyles();
  return (
    <Box className={clsx(clases.content, clases.contentShift)}>
      <div className={clases.drawerHeader}></div>

      <div className={clases.PokemonGame}>
        <Hidden smDown>
          <div className={clases.PokemonGameLeft}></div>
        </Hidden>

        <div className={clases.PokemonGameCard}>
          <PokemonCard />
        </div>

        <div className={clases.PokemonGameRecord}>
          <RecordTable id_Game={1} />
        </div>
      </div>
    </Box>
  );
}

export default PokemonIndex;

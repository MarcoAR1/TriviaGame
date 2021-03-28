import React from "react";
import clsx from "clsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import {
  Card,
  CardActionArea,
  CardMedia,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { keysMapIndex, InfoGames } from "./Games/Data/InfoGames.jsx";

function AllGame(props) {
  const state = props.state;
  const clases = UseStyles();

  return (
    <div className={clsx(clases.content, clases.contentShift)}>
      <div className={clases.drawerHeader}></div>
      <div className={clsx(state.open && clases.gridSelection)}>
        <GridList cellHeight="auto" cols={3}>
          {keysMapIndex.map((e, i) => {
            if (i === 0) {
              return (
                <GridListTile cols={3} key={e}>
                  <Card>
                    <CardActionArea href={`/${e}`}>
                      <CardMedia component="img" image={InfoGames[e].img} />
                    </CardActionArea>
                  </Card>
                </GridListTile>
              );
            } else {
              return (
                <GridListTile key={e} cls={1}>
                  <Card>
                    <CardActionArea
                      href={
                        e.replace(/Proximamente\d/g, "") === "" ? "/" : `/${e}`
                      }
                    >
                      <CardMedia image={InfoGames[e].img} component="img" />
                    </CardActionArea>
                  </Card>
                </GridListTile>
              );
            }
          })}
        </GridList>
      </div>
    </div>
  );
}

export default AllGame;

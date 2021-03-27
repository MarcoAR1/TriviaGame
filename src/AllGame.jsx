import React from "react";
import clsx from "clsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import { keysMapIndex, InfoGames } from "./Games/Data/InfoGames.jsx";

function AllGame(props) {
  const state = props.state;
  const clases = UseStyles();

  return (
    <div className={clsx(clases.content, clases.contentShift)}>
      <div className={clases.drawerHeader}></div>
      <div className={clsx(state.open && clases.gridSelection)}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {keysMapIndex.map((e, i) => {
            if (i === 0) {
              return (
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={clases.gridFrist}
                  key={e}
                >
                  <Card className={clases.fristGridImg}>
                    <CardActionArea href={`/${e}`}>
                      <CardMedia
                        className={clases.fristImg}
                        component="img"
                        image={InfoGames[e].img}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            } else {
              return (
                <div key={e} className={clases.gridSecond}>
                  <Card>
                    <CardActionArea href={`/${e}`}>
                      <CardMedia image={InfoGames[e].img} component="img" />
                    </CardActionArea>
                  </Card>
                </div>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
}

export default AllGame;

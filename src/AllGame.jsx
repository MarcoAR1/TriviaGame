import React, { useState } from "react";
import clsx from "clsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import PokemonIndex from "./Games/PokemonTrivia/PokemonIndex.jsx";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";

const indexGame = {
  Pokemon: {
    ruta: <PokemonIndex />,
    img: "./img/bannerPokemon.png",
    Description: "",
  },
  Proximamente: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
  Proximamente2: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
  Proximamente3: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
  Proximamente4: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
  Proximamente5: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
  Proximamente6: {
    ruta: {},
    img: "./img/proximamente.jpg",
    Description: "",
  },
};
const keysMapIndex = Object.keys(indexGame);

function AllGame(props) {
  const state = props.state;
  const [game, setGame] = useState(true);
  const clases = UseStyles();

  if (game) {
    return (
      <div
        className={clsx(clases.content, {
          [clases.contentShift]: !state.open,
        })}
      >
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
                      <CardActionArea onClick={() => setGame(false)}>
                        <CardMedia
                          className={clases.fristImg}
                          component="img"
                          image={indexGame[e].img}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              } else {
                return (
                  <div key={e} className={clases.gridSecond}>
                    <Card>
                      <CardActionArea>
                        <CardMedia image={indexGame[e].img} component="img" />
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
  } else {
    return (
      <div
        className={clsx(clases.content, {
          [clases.contentShift]: !state.open,
        })}
      >
        <div className={clases.drawerHeader}></div>
        {indexGame.Pokemon.ruta}
      </div>
    );
  }
}

export default AllGame;

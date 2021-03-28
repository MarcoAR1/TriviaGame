import React, { useEffect, useReducer } from "react";
import clsx from "clsx";
import UseStyles from "../Style/PokemonCardStyle.jsx";
import { getDataPokemon, reducer, initialState } from "../Data/PokemonList.jsx";
import "../Style/PokemonCardStyle.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  GridList,
  GridListTile,
} from "@material-ui/core";
const PokemonCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    counter,
    Result,
    flip,
    img,
    title,
    buttonMap,
    question,
    winOrLosse,
    coluns,
  } = state;
  const clases = UseStyles();
  const number = () => Math.floor(Math.random() * 898 + 1);
  const number1Al0 = () => Math.round(Math.random());
  const gameMode = {
    0: (value = true) => {
      getDataPokemon(number(), dispatch, true, value);
    },
    1: (value = true) => {
      getDataPokemon(number(), dispatch, false, value);
    },
  };
  useEffect(() => {
    switch (winOrLosse) {
      case "Win":
        gameMode[number1Al0()]();
        break;
      case "Lose":
        dispatch({
          type: "buttonMap",
          buttonMap: ["Restar Game"],
        });
        break;
      case "Restart":
        dispatch({ type: "Reset", counter: 0, coluns: 2 });
        gameMode[number1Al0()]();
        break;
      default:
        gameMode[number1Al0()](false);
        break;
    }
    // eslint-disable-next-line
  }, [winOrLosse, counter]);
  return (
    <Card className={clsx(clases.Card, flip && "flip-vertical-right")}>
      <CardActionArea>
        <Typography
          className={clases.texto}
          variant="h3"
          component="h2"
          align="center"
        >
          {title}
        </Typography>
        <CardMedia
          component="img"
          alt="Trivia Pokemon imagen"
          image={img}
          title={title}
          className={clases.img}
        />
        <CardContent>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            {question}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Tu puntuacion es de:
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {counter}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Elije la Respuesta Correcta:
          </Typography>
        </CardContent>
      </CardActionArea>
      <GridList cellHeight="auto" cols={coluns} className={clases.gridButtons}>
        {buttonMap.map((e) => {
          if (e === "Restar Game") {
            return (
              <GridListTile align="rigth" key={e}>
                <Button
                  key={e}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  className={clases.texto}
                  onClick={() => {
                    dispatch({
                      type: "winOrLosse",
                      winOrLosse: "Restart",
                    });
                  }}
                >
                  {e}
                </Button>
              </GridListTile>
            );
          } else if (e === Result) {
            return (
              <GridListTile align="center" key={e}>
                <Button
                  align="center"
                  key={e}
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={clases.texto}
                  onClick={() => {
                    dispatch({
                      type: "winOrLosse",
                      winOrLosse: "Win",
                    });
                  }}
                >
                  {e}
                </Button>
              </GridListTile>
            );
          } else {
            return (
              <GridListTile align="center" key={e}>
                <Button
                  align="center"
                  key={e}
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={clases.texto}
                  onClick={() => {
                    dispatch({
                      type: "winOrLosse",
                      winOrLosse: "Lose",
                    });
                  }}
                >
                  {e}
                </Button>
              </GridListTile>
            );
          }
        })}
      </GridList>
    </Card>
  );
};

export default React.memo(PokemonCard);

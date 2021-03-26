import { React, useState, useEffect } from "react";
import clsx from "clsx";
import UseStyles from "../Style/PokemonCardStyle.jsx";
import getDataPokemon from "../Data/PokemonList.jsx";
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










function PokemonCard() {
  const clases = UseStyles();
  const [counter, SetCounter] = useState(0);
  const [Result, SetResult] = useState("");
  const [flip, Setflip] = useState(true);
  const [img, SetImg] = useState("");
  const [title, SetTitle] = useState("");
  const [buttonMap, SetButton] = useState([]);
  const [question, SetQuestion] = useState("");
  const [winOrLosse, SetwinOrLosse] = useState(0);
  const [coluns, SetColuns] = useState(2);
  const number = () => Math.floor(Math.random() * 898 + 1);
  const number1Al0 = () => Math.round(Math.random());
  const gameMode = {
    0: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, "", SetButton);
      SetQuestion("¿Quien es este Pokemon?");
      Setflip(!flip ? true : false);
    },
    1: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, SetButton, "");
      SetQuestion("¿Que tipo es este Pokemon?");
      Setflip(!flip ? true : false);
    },
  };
  useEffect(() => {
    switch (winOrLosse) {
      case 1:
        gameMode[number1Al0()]();
        break;
      case 2:
        SetButton(["Restar Game"]);
        SetColuns(1);

        break;
      case 3:
        SetCounter(0);
        SetColuns(2);
        gameMode[number1Al0()]();
        break;
      default:
        gameMode[number1Al0()]();
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
                    SetwinOrLosse(3);
                    SetButton([]);
                    Setflip(false);
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
                    SetCounter(parseInt(counter) + 1);
                    SetwinOrLosse(1);
                    Setflip(false);
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
                    SetwinOrLosse(2);
                    Setflip(false);
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
}

export default PokemonCard;

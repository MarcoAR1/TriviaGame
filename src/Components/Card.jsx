import { React, useState, useEffect } from "react";
import { UseStyles } from "../Games/PokemonTrivia/Style/PokemonCardStyle.jsx";
import { getDataPokemon } from "../Games/PokemonTrivia/Data/PokemonList.jsx";
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
function CardTrivia() {
  const clases = UseStyles();
  const [counter, SetCounter] = useState(0);
  const [Result, SetResult] = useState("");
  const [img, SetImg] = useState("");
  const [title, SetTitle] = useState("");
  const [buttonMap, SetButton] = useState([]);
  const [question, SetQuestion] = useState("");
  const [winOrLosse, SetwinOrLosse] = useState(0);
  const number = () => Math.floor(Math.random() * 879 + 1);
  const number1Al0 = () => Math.round(Math.random());
  const gameMode = {
    0: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, "", SetButton);
      SetQuestion("¿Quien es este Pokemon?");
    },
    1: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, SetButton, "");
      SetQuestion("¿Que tipo es este Pokemon?");
    },
  };
  useEffect(() => {
    switch (winOrLosse) {
      case 1:
        gameMode[number1Al0()]();
        break;
      case 2:
        SetButton(["Restar Game"]);
        break;
      case 3:
        console.log("Aqui Toy");
        SetCounter(0);
        gameMode[number1Al0()]();
        break;
      default:
        gameMode[number1Al0()]();
        break;
    }
    // eslint-disable-next-line
  }, [winOrLosse, counter]);
  return (
    <Card className={clases.Card}>
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
      <GridList cellHeight="auto" cols={2} className={clases.gridButtons}>
        {buttonMap.map((e) => {
          if (e === "Restar Game") {
            return (
              <GridListTile align="center" key={e}>
                <Button
                  align="center"
                  key={e}
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={clases.texto}
                  onClick={() => SetwinOrLosse(3)}
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

export default CardTrivia;

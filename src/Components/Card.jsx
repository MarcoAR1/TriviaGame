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
  const [Result, SetResult] = useState([]);
  const [img, SetImg] = useState("");
  const [title, SetTitle] = useState("");
  const [buttonMap, SetButton] = useState([]);
  const number = () => Math.floor(Math.random() * 879 + 1);
  const index = {
    0: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, "", SetButton);
    },
    1: () => {
      getDataPokemon(number(), SetResult, SetImg, SetTitle, SetButton, "");
    },
  };
  useEffect(() => {
    const number1al0 = () => Math.round(Math.random());
    const number = number1al0();
    index[number]();
  }, []);
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
            ¿Quien es este Pokemon?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Elije la Respuesta Correcta
          </Typography>
        </CardContent>
      </CardActionArea>
      <GridList cellHeight="auto" cols={2} className={clases.gridButtons}>
        {buttonMap.map((e) => {
          return (
            <GridListTile align="center" key={e}>
              <Button
                align="center"
                key={e}
                variant="contained"
                color="primary"
                fullWidth
                className={clases.texto}
              >
                {e}
              </Button>
            </GridListTile>
          );
        })}
      </GridList>
    </Card>
  );
}

export default CardTrivia;

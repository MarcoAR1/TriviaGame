import React from "react";
import UseStyles from "../Games/PokemonTrivia/Style/PokemonCardStyle.jsx";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

const TextAndImg = (props) => {
  const { title, img, question, counter } = props.props;

  const clases = UseStyles();
  return (
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
  );
};

export default React.memo(TextAndImg);

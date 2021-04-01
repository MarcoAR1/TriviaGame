import React, { useEffect, useReducer } from "react";
import clsx from "clsx";
import UseStyles from "../Style/PokemonCardStyle.jsx";
import { getDataPokemon, reducer, initialState } from "../Data/PokemonList.jsx";
import Botonesdeopciones from "../../../Components/Botonesdeopciones.jsx";
import TextAndImg from "../../../Components/TextAndImg.jsx";
import "../Style/PokemonCardStyle.css";
import { Card } from "@material-ui/core";
const PokemonCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter, Result, flip, img, title, buttonMap, question, nextRound } = state;
  const clases = UseStyles();
  useEffect(() => {
    if (flip) {
      if (document.getElementById("PokemonCard")) {
        const PokemonCard = document.getElementById("PokemonCard");
        PokemonCard.classList.toggle("flip-vertical-right");
        setTimeout(() => {
          PokemonCard.classList.toggle("flip-vertical-right");
        }, 450);
      }
    }
    getDataPokemon(dispatch);
  }, [flip]);
  return (
    <Card id="PokemonCard" className={clsx(clases.Card)}>
      <TextAndImg props={{ title, img, question, counter }} />
      <Botonesdeopciones
        props={{ dispatch, buttonMap, Result, counter, getDataPokemon, nextRound }}
      />
    </Card>
  );
};

export default React.memo(PokemonCard);

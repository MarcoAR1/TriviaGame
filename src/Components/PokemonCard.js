import { React, useState, useEffect } from "react";
import "../css/Card.css";
import { getDataPokemon } from "../Data/PokemonList.js";
function PokemonCard() {
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
    <div className="CARD">
      <div className="CARD-NAME">{title}</div>
      <div>
        <img className="CARD-IMG" alt={title} src={img} />
      </div>
      <div className="CARD-BUTTONS">
        {buttonMap.map((e) => (
          <button className="CARD-BUTTONS-CHOISE" key={e}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

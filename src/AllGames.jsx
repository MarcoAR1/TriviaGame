import React, { useReducer } from "react";
import NavBar from "./Components/NavBar.jsx";
import PokemonIndex from "./Games/PokemonTrivia/PokemonIndex.jsx";
import MenuOptions from "./Components/MenuOptions.jsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
const reducer = (state, actions) => {
  switch (actions.type) {
    case "false":
      return {
        ...state,
        open: false,
      };
    case "true":
      return {
        ...state,
        open: true,
      };

    default:
      return { state };
  }
};
const initialState = {
  open: false,
};
function AllGames() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clases = UseStyles();
  return (
    <div className={clases.root}>
      <NavBar state={state} dispatch={dispatch} />
      <MenuOptions state={state} dispatch={dispatch} />
      <PokemonIndex state={state} dispatch={dispatch} />
    </div>
  );
}

export default AllGames;

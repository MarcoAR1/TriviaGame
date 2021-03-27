import React, { useReducer } from "react";
import NavBar from "./Components/NavBar.jsx";
import MenuOptions from "./Components/MenuOptions.jsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import { reducer, initialState } from "./Components/MenuBolean.jsx";
import AllGame from "./AllGame.jsx";

function Inicio() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clases = UseStyles();
  return (
    <div className={clases.root}>
      <NavBar state={state} dispatch={dispatch} />
      <MenuOptions state={state} dispatch={dispatch} />
      <AllGame state={state} dispatch={dispatch} />
    </div>
  );
}

export default Inicio;

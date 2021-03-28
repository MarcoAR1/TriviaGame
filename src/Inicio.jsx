import React, { useReducer } from "react";
import NavBar from "./Components/NavBar.jsx";
import MenuOptions from "./Components/MenuOptions.jsx";
import UseStyles from "./StyleTheme/AllGameStyle.jsx";
import { reducer, initialState } from "./Components/MenuBolean.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { keysMapIndex, InfoGames } from "./Games/Data/InfoGames.jsx";
import AllGame from "./AllGame.jsx";
import Proximamente from "./Games/Proximamente.jsx";
function Inicio() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clases = UseStyles();
  return (
    <div className={clases.root}>
      <NavBar state={state} dispatch={dispatch} />
      <MenuOptions state={state} dispatch={dispatch} />
      <Router>
        <Switch>
          {keysMapIndex.map((Game) => {
            return (
              <Route key={Game} path={`/${Game}`}>
                {InfoGames[Game].ruta ? InfoGames[Game].ruta : <Proximamente />}
              </Route>
            );
          })}
          <Route key="AllGame" path="/" exact>
            <AllGame state={state} dispatch={dispatch} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Inicio;

import React, { useState, useEffect } from "react";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  GridListTile,
  ListSubheader,
  GridList,
  Card,
} from "@material-ui/core";

/* const createRecord = async (data) => {
  try {
    const Solicitud = await fetch(
      "https://api-trivia-game.herokuapp.com/Records",
      {
        method: "POST",

        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const respuesta = await Solicitud.json();
  } catch (error) {
    console.log(error);
  }
}; */
const consultRecords = async (setRecord) => {
  try {
    const Solicitud = await fetch(
      "https://api-trivia-game.herokuapp.com/Records",
      { method: "GET" }
    );
    const record = await Solicitud.json();
    setRecord(record);
    return;
  } catch (error) {
    console.log(error);
  }
};
const RecordTable = (props) => {
  const [record, setRecord] = useState([]);
  const clases = UseStyles();
  useEffect(() => {
    consultRecords(setRecord);
  }, []);

  return (
    <Card>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton aria-label="trofeo">
            <img src="../../img/trophy.png" alt="trofeo" />
          </IconButton>

          <Typography variant="h6">Records</Typography>
        </Toolbar>
      </AppBar>
      <GridList cellHeight={80} cols={1} className={clases.recordGame}>
        {record.length === 0 ? (
          <GridListTile key="loading" cols={1}>
            <ListSubheader component="div">
              Estamos obteniendo los record
            </ListSubheader>
          </GridListTile>
        ) : (
          record.map((e) => {
            return (
              <GridListTile key={e.id} cols={1}>
                <ListSubheader component="div">
                  {e.player} {e.record}
                </ListSubheader>
              </GridListTile>
            );
          })
        )}
      </GridList>
    </Card>
  );
};

export default RecordTable;

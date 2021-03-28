import React from "react";
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

const RecordTable = () => {
  const clases = UseStyles();
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
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1131</ListSubheader>
        </GridListTile>
        <GridListTile cols={1}>
          <ListSubheader component="div">1231</ListSubheader>
        </GridListTile>
      </GridList>
    </Card>
  );
};

export default RecordTable;

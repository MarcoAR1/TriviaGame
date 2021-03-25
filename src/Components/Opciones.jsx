import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";

function Opciones() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <GamesOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Hello My Name Is Mar" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <GamesOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Hello My Name Is Marco" />
      </ListItem>
    </List>
  );
}

export default Opciones;

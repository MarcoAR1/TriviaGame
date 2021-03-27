import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@material-ui/core";
import GamesOutlinedIcon from "@material-ui/icons/GamesOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import VideogameAssetTwoToneIcon from "@material-ui/icons/VideogameAssetTwoTone";
import { keysMapIndex } from "../Games/Data/InfoGames.jsx";
const Opciones = () => {
  const clases = UseStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const Redirect = (e) => {
    window.location.href = e;
  };

  return (
    <List>
      <ListItem button key="juegos" onClick={handleClick}>
        <ListItemIcon>
          <GamesOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Juegos" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {keysMapIndex.map((Game, i) => {
            if (!(Game === `Proximamente${i}`)) {
              return (
                <ListItem
                  key={Game}
                  button
                  className={clases.nested}
                  onClick={() => Redirect(`/${Game}`)}
                >
                  <ListItemIcon>
                    <VideogameAssetTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary={Game} />
                </ListItem>
              );
            } else {
              return null;
            }
          })}
        </List>
      </Collapse>
      <Divider />
      <ListItem key={"record"} button>
        <ListItemIcon>
          <StarBorderOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="World Records" />
      </ListItem>
    </List>
  );
};

export default Opciones;

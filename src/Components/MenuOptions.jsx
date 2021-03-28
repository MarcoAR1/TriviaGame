import React from "react";
import clsx from "clsx";
import {
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Opciones from "./Opciones";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { HomeTwoTone } from "@material-ui/icons";
const MenuOptions = (props) => {
  const state = props.state;
  const dispatch = props.dispatch;
  const clases = UseStyles();
  const handleDrawerClose = () => {
    dispatch({ type: "false" });
  };
  return (
    <Drawer
      className={clsx(clases.drawer, !state.open && clases.hide)}
      variant="temporary"
      anchor="left"
      open={state.open}
      classes={{
        paper: clases.drawerPaper,
      }}
      onClose={handleDrawerClose}
    >
      <div className={clases.drawerHeader}>
        <ListItem
          button
          key="Home"
          onClick={() => (window.location.href = "/")}
        >
          <ListItemIcon>
            <HomeTwoTone />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Opciones />
    </Drawer>
  );
};

export default MenuOptions;

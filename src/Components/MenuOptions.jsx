import React from "react";
import clsx from "clsx";
import theme from "../StyleTheme/temaConfig.jsx";
import { Divider, Drawer, IconButton } from "@material-ui/core";
import Opciones from "./Opciones";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Opciones />
    </Drawer>
  );
};

export default MenuOptions;

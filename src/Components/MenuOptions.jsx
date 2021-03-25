import React from "react";
import { Divider, Drawer } from "@material-ui/core";
import Opciones from "./Opciones";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
const MenuOptions = () => {
  const clases = UseStyles();
  return (
    <div>
      <Drawer
        className={clases.drawer}
        variant="permanent"
        classes={{
          paper: clases.drawerPaper,
        }}
        anchor="left"
      >
        <div className={clases.toolbar}></div>
        <Divider />
        <Opciones />
      </Drawer>
    </div>
  );
};

export default MenuOptions;

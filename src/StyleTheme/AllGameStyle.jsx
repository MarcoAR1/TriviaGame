import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
const UseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  gridSelection: {
    margin: `0 0 0 ${drawerWidth}px`,
    "@media (max-width:500px)": {
      margin: `0`,
    },
  },
  fristGridImg: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
  },
  gridFrist: {
    padding: "0 0 1rem 0",
    "@media (max-width:500px)": {
      margin: "0 auto",
      height: "180px",
    },
    "@media (max-width:320px)": {
      height: "140px",
      margin: "0 auto",
    },
  },
  gridSecond: {
    padding: "0 1rem 1rem 0",
  },
  fristImg: {
    height: "auto",
    width: "100%",
    margin: "0 auto",
    "@media (max-width:1000px)": {
      height: "180px",
    },
    "@media (max-width:320px)": {
      height: "140px",
    },
  },
}));

export default UseStyles;

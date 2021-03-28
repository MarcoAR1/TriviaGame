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
  nested: {
    paddingLeft: theme.spacing(4),
  },
  PokemonGame: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:1490px)": {
      flexDirection: "column",
    },
  },
  PokemonGameLeft: {
    width: "475px",
    flexGrow: "0",
    order: "1",
    "@media (max-width:960px)": {
      order: "2",
    },
  },
  PokemonGameCard: {
    order: "2",
    "@media (max-width:960px)": {
      order: "1",
    },
  },
  PokemonGameRecord: {
    maxWidth: "475px",
    flexGrow: "0",
    order: "3",
    width: "auto",
    "@media (max-width:1490px)": {
      padding: "0.51rem",
      maxWidth: "447px",
    },
  },
  recordGame: {
    maxHeight: "577px",
  },
}));

export default UseStyles;

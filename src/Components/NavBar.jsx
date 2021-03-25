import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import UseStyles from "../StyleTheme/AllGameStyle.jsx"
function NavBar() {
  const clases = UseStyles();
  return (
    <AppBar position="fixed" color="primary" className={clases.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={clases.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Button href="./" color="secondary">
          Trivia Game
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

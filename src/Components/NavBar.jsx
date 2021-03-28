import clsx from "clsx";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import UseStyles from "../StyleTheme/AllGameStyle.jsx";
function NavBar(props) {
  const state = props.state;
  const dispatch = props.dispatch;
  const clases = UseStyles();
  const handleDrawerOpen = () => {
    dispatch({ type: "true" });
  };
  return (
    <AppBar
      position="fixed"
      color="primary"
      className={clsx(clases.appBar, {
        [clases.appBarShift]: state.open,
      })}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={clsx(clases.menuButton, state.open && clases.hide)}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Button href="./">
          <Typography variant="h6" color="initial">
            Trivia Game
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

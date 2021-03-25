import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./StyleTheme/temaConfig.jsx";import AllGames from "./AllGames.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllGames />
    </ThemeProvider>
  );
}

export default App;

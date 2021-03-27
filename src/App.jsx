import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./StyleTheme/temaConfig.jsx";
import Inicio from "./Inicio.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Inicio />
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import CardTrivia from "./Components/Card.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./StyleTheme/temaConfig.jsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardTrivia />
    </ThemeProvider>
  );
}

export default App;

import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles({
  gridButtons: {
    padding: "0.5rem",
  },
  texto: {
    textTransform: "capitalize",
  },
  img: {
    maxWidth: "80%",
    margin: "0 auto",
  },
  Card: {
    margin: "3rem auto",
    maxWidth: "33%",
    minWidth: "250px",
    "@media (max-width:700px)": {
      margin: "3rem auto",
      maxWidth: "51%",
    },
  },
});

export default UseStyles;

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
    "@media (max-width:375px)": {
      maxWidth: "100%",
    },
    "@media (max-width:325px)": {
      maxWidth: "65%",
    },
  },
  Card: {
    "@media (max-width:500px)": {
      maxWidth: "100%",
      minWidth: "250px",
      margin: 0,
    },
    "@media (max-width:325px)": {
      maxWidth: "65%",
      minWidth: "250px",
    },
  },
});

export default UseStyles;

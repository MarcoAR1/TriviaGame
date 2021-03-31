import React, { useState } from "react";
import clsx from "clsx";
import {
  Button,
  GridList,
  GridListTile,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import UseStyles from "../Games/PokemonTrivia/Style/PokemonCardStyle.jsx";
import FormCreateRecords from "./FromCreateRecords";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
const Botonesdeopciones = (props) => {
  const [saveRecord, setSaveRecord] = useState(false);
  const [alterNotifi, setalterNotifi] = useState(false);
  const [success, setSuccess] = useState(false);
  const [calm, setCalm] = useState(false);
  const { dispatch, buttonMap, Result, counter, getDataPokemon } = props.props;
  const clases = UseStyles();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClickSaveRecord = () => {
    setSaveRecord(true);
  };
  const handleClickNotifi = (prop) => {
    setalterNotifi(true);
    if (prop) setSuccess(prop);
    else setSuccess(prop);
  };
  const handleCloseNotifi = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setalterNotifi(false);
  };

  const handleJustCalm = () => {
    setCalm(
      <Snackbar
        open={!!calm}
        onClose={() => {
          setCalm(false);
        }}
        autoHideDuration={3000}
      >
        <Alert
          className="alertNotification"
          onClose={() => {
            setCalm(false);
          }}
          severity="success"
        >
          Ya guardaste tu record.
        </Alert>
      </Snackbar>
    );
  };
  return (
    <GridList cellHeight="auto" cols={2} className={clases.gridButtons}>
      {buttonMap.map((e) => {
        if (e === "Restar Game") {
          return (
            <GridList
              key={e}
              cellHeight="auto"
              cols={2}
              className={clases.gridButtons}
            >
              <GridListTile cols={2} align="rigth" key={e}>
                <Button
                  key={e}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  className={clases.texto}
                  onClick={() => {
                    getDataPokemon(dispatch, "reset");
                  }}
                >
                  {e}
                </Button>
              </GridListTile>
              <GridListTile cols={1} align="rigth" key="Guardar Record">
                <Button
                  key="Guardar Record"
                  id="Guardar Record"
                  variant="contained"
                  color="inherit"
                  fullWidth
                  className={clsx(clases.texto, clases.SaveRecord)}
                  onClick={success ? handleJustCalm : handleClickSaveRecord}
                >
                  Guardar Record
                </Button>
                <FormCreateRecords
                  props={{
                    saveRecord,
                    setSaveRecord,
                    counter: counter,
                    id_game: 1,
                    alterNotifi,
                    setalterNotifi,
                    handleClickNotifi,
                  }}
                />
              </GridListTile>
              <Tooltip title="Comparte tu record! :3">
                <GridListTile cols={1} align="rigth" key="Compartir Record">
                  <Button
                    key="Compartir Record"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={clsx(clases.texto, clases.CompartirRecords)}
                    onClick={() => {}}
                  >
                    <ShareTwoToneIcon />
                  </Button>
                </GridListTile>
              </Tooltip>
            </GridList>
          );
        } else if (e === Result) {
          return (
            <GridListTile cols={1} align="center" key={e}>
              <Button
                align="center"
                key={e}
                variant="contained"
                color="primary"
                fullWidth
                className={clases.texto}
                onClick={() => {
                  getDataPokemon(dispatch, "win");
                }}
              >
                {e}
              </Button>
            </GridListTile>
          );
        } else {
          return (
            <GridListTile align="center" key={e}>
              <Button
                align="center"
                key={e}
                variant="contained"
                color="primary"
                fullWidth
                className={clases.texto}
                onClick={() => {
                  dispatch({
                    type: "buttonMap",
                    buttonMap: ["Restar Game"],
                  });
                }}
              >
                {e}
              </Button>
            </GridListTile>
          );
        }
      })}
      <Snackbar
        open={alterNotifi}
        onClose={handleCloseNotifi}
        autoHideDuration={6000}
      >
        {success ? (
          <Alert
            className="alertNotification"
            onClose={handleCloseNotifi}
            severity="success"
          >
            Se ha guardado con exito
          </Alert>
        ) : (
          <Alert
            className="alertNotification"
            onClose={handleCloseNotifi}
            severity="error"
          >
            Ha fallado el guardado intentalo de nuevo
          </Alert>
        )}
      </Snackbar>
      {calm ? calm : ""}
    </GridList>
  );
};

export default React.memo(Botonesdeopciones);

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Typography,
} from "@material-ui/core";

const createRecord = async (data) => {
  try {
    const Solicitud = await fetch(
      "https://api-trivia-game.herokuapp.com/Records",
      {
        method: "POST",

        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const respuesta = await Solicitud.json();
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const FromCreateRecords = (props) => {
  const {
    saveRecord,
    setSaveRecord,
    id_game,
    counter,
    handleClickNotifi,
  } = props.props;

  const [validator, setValidator] = useState(false);
  const [errorInput, seterrorInput] = useState(false);
  const [errorInputEmail, seterrorInputEmail] = useState(false);
  const handleCloseSaveRecord = (data) => {
    setSaveRecord(false);
    const datos = { record: counter, id_game: id_game };
    let x = 0;
    console.log(!data[x].value.trim());
    if (data[x].value) {
      console.log(data[x].value);
      while (data[x].value) {
        console.log(data[x].value);
        datos[data[x].id] = data[x].value;
        x += 1;
      }
    }
    const result = async () => await createRecord(datos);

    const muestreo = async () => {
      const resu = await result();
      if (resu) {
        if (resu.id) {
          handleClickNotifi(true);
        } else if (resu.message) {
          handleClickNotifi(false);
        }
      } else {
        handleClickNotifi(false);
      }
    };
    muestreo();
  };

  const handleClose = () => {
    setSaveRecord(false);
  };
  const handleValidatorWord = () => {
    const playerInput = document.getElementById("player");
    const playerNameLength = playerInput.value.length;
    if (
      playerNameLength > 10 ||
      playerNameLength < 1 ||
      playerInput.value.match(/^ /)
    ) {
      setValidator(false);
      seterrorInput(true);
      if (playerInput.value.match(/^ /)) {
        playerInput.value = playerInput.value.replace(/^ +/, "");
      }
    } else if (playerNameLength > 0) {
      setValidator(true);
      seterrorInput(false);
    }
  };
  const handleValidatorEmail = () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const match = email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    if (match) {
      seterrorInputEmail(false);
      emailInput.value = email.replace(/^ +/, "");
    } else {
      seterrorInputEmail(true);
      emailInput.value = email.replace(/^ +/, "");
    }
  };

  return (
    <Dialog
      open={saveRecord}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      component="div"
    >
      <DialogTitle id="form-dialog-title">Guarda tu record</DialogTitle>
      <DialogContent component="div">
        <DialogContentText component="div">
          <Typography variant="body1" color="initial" component="p">
            Rellena los datos a continuacion para guardar tu record:
          </Typography>
          <Typography variant="h2" color="initial" align="center" component="p">
            {counter}
          </Typography>

          <Typography variant="body1" color="initial" component="p">
            puedes dejarnos tu mail opcionalmente
          </Typography>
        </DialogContentText>
        <form id="my-input" noValidate autoComplete="off">
          <TextField
            id="player"
            label="Nombre"
            variant="standard"
            autoFocus
            helperText="Maximo 10 letras"
            error={errorInput && true}
            onChange={handleValidatorWord}
            margin="dense"
          />
          <TextField
            id="email"
            label="Correo (opcional) :3"
            helperText="Si quieres puedes dejarlo opcionalmente para enviarte nuevos juegos"
            variant="standard"
            onChange={handleValidatorEmail}
            error={errorInputEmail && true}
            margin="dense"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={!validator}
          onClick={() => {
            handleCloseSaveRecord(document.querySelectorAll("#my-input")[0]);
            setValidator(false);
          }}
          color="primary"
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FromCreateRecords;

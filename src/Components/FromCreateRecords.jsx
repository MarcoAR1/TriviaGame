import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  FormHelperText,
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

  const handleCloseSaveRecord = (data) => {
    setSaveRecord(false);
    const datos = { record: counter, id_game: id_game };
    let x = 0;
    if (data[0]) {
      while (data[x].value) {
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

  return (
    <Dialog
      open={saveRecord}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Guarda tu record</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Puedes dejarnos tu mail opcionalmente
        </DialogContentText>
        <form id="my-input" noValidate autoComplete="off">
          <FormHelperText>hola que hace</FormHelperText>
          <TextField id="player" label="name" variant="filled" />
          <FormHelperText>hola que hace</FormHelperText>
          <TextField id="email" label="email" variant="outlined" fullWidth />
          <FormHelperText>hola que hace</FormHelperText>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          type="susmit"
          onClick={() =>
            handleCloseSaveRecord(document.querySelectorAll("#my-input")[0])
          }
          color="primary"
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FromCreateRecords;

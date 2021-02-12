import { Button, TextField, Box } from "@material-ui/core";
import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);
  const handleChange = (e) => {};
  const handleClick = (e) => {
    inputRef.current.select();
  };
  return (
    <div>
      <Box m={2}>
        <TextField
          onChange={handleChange}
          inputRef={inputRef}
          style={{ width: "60%" }}
          name="Nombre"
          autoComplete="off"
          label="Nombre"
        />
      </Box>
      <Box m={2}>
        <TextField
          onChange={handleChange}
          style={{ width: "60%" }}
          name="correo"
          autoComplete="off"
          label="Correo"
        />
      </Box>
      <Box m={2}>
        <TextField
          onChange={handleChange}
          style={{ width: "60%" }}
          name="password"
          type="password"
          autoComplete="off"
          label="password"
        />
      </Box>
      <Box m={2}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Enviar respuesta
        </Button>
      </Box>
    </div>
  );
};

export default FocusScreen;

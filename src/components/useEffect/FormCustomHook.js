import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import useForm from "../../Hooks/useForm";
import { Box, Button } from "@material-ui/core";
const FormCustomHook = () => {
  const [values, setFormState] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect</h1>
      <hr />
      <Box mt={2}>
        <TextField
          id="name"
          name="name"
          label="Nombre"
          value={name}
          onChange={setFormState}
          style={{ width: "35%" }}
        />
      </Box>
      <Box mt={2}>
        <TextField
          id="email"
          name="email"
          label="Correo Electronico"
          value={email}
          onChange={setFormState}
          style={{ width: "35%" }}
        />
      </Box>
      <Box mt={2}>
        <TextField
          type="password"
          id="password"
          name="password"
          label="Contraseña"
          value={password}
          onChange={setFormState}
          style={{ width: "35%" }}
        />
      </Box>
      <Box mt={4}>
        <Button className="mt-4"   type="submit" variant="contained" color="primary">
          Enviar formulario
        </Button>
      </Box>
    </form>
  );
};
export default FormCustomHook;

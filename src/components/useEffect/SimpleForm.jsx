import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Mensaje from "./Mensaje";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  useEffect(() => {}, []);
  useEffect(() => {}, [email]);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div>
        <TextField
          id="name"
          name="name"
          label="Nombre"
          value={name}
          onChange={handleChange}
          style={{ width: "35%" }}
        />
      </div>
      <div className="mt-4">
        <TextField
          id="email"
          name="email"
          label="Correo Electronico"
          value={email}
          onChange={handleChange}
          style={{ width: "35%" }}
        />
      </div>

      {name === "123" && <Mensaje />}
    </>
  );
};
export default SimpleForm;

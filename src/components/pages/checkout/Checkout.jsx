import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const Checkout = () => {
  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // lo que yo quiera hacer con el formulario
    console.log(info);
  };

  return (
    <div style={{ padding: "100px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          label="Nombre"
          onChange={handleChange}
          name="nombre"
        />
        <TextField
          variant="outlined"
          type="text"
          label="Telefono"
          onChange={handleChange}
          name="telefono"
        />
        <TextField
          variant="outlined"
          type="text"
          label="Email"
          onChange={handleChange}
          name="email"
        />
        <Button variant="contained" type="submit">enviar</Button>
      </form>
    </div>
  );
};

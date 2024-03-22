import { Badge, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const PruebaComponentes = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <Box style={{ padding: "50px" }}>
      <form action="">
        <TextField
          label="Password"
          variant="outlined"
          type={mostrar ? "text" : "password"}
        />
        <Button onClick={() => setMostrar(!mostrar)}>ver/ocultar</Button>

        <TextField label="apellido" variant="outlined" />
        <TextField label="telefono" variant="outlined" />

        <Button variant="contained">enviar</Button>
      </form>

      <Badge badgeContent={0} color="primary" showZero={true}>
        <AddShoppingCartIcon color="primary" />
      </Badge>
    </Box>
  );
};

export default PruebaComponentes;

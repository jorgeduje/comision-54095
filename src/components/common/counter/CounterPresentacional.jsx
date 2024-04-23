import { Button } from "@mui/material";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button onClick={restar} variant="outlined">
        restar
      </Button>
      <h2>{contador}</h2>
      <Button onClick={sumar} variant="outlined">
        sumar
      </Button>
      <Button onClick={() => onAdd(contador)} variant="contained">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;

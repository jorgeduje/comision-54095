import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = ({ productosAgregados }) => {
  return (
    <div>
      <h1>Este es el carrito</h1>
      <h2>aca van los productos que agregamos </h2>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clartCartAlert = () => {
    // clearCart()
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: "No, dejar como estaba",
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "el carrito efectivamente fue eliminado",
          icon: "success",
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "el carrito queda como estaba",
          icon: "info",
        });
      }
    });
  };

  return (
    <div>
      <h1>Este es el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteById(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>El total a pagar es {total}</h2>

      <Button onClick={clartCartAlert} variant="outlined">
        Limpiar carrito
      </Button>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;

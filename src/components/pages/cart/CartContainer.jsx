import Cart from "./Cart"


const CartContainer = () => {
    console.log("logica")
    
    let productosAgregados = []

  return <Cart productosAgregados={productosAgregados} />
}

export default CartContainer
import { createContext, useState } from "react";

export const CartContext = createContext(); // ---> contexto

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = ( product )=>{
    // setCart( product ) // ---> {}
    // setCart( [ product ] ) // ---> [ {} ]
    setCart( [...cart, product ] )
  }

  const clearCart = () => {
    setCart( [] )
  }

  const deleteById = ( id )=>{
     const newArray = cart.filter( product => product.id !== id ) // [1,3 ]
     setCart( newArray )
  }
  // funcion que determine el precio total
  // funcion que determine cuantos productos tengo 

  let data = { cart, addToCart, clearCart, deleteById};

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;

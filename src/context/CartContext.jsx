import { createContext, useState } from "react";

export const CartContext = createContext(); // ---> contexto

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //tengo que verificar si ya esta
    let exist = isInCart(product.id);
    if (exist) {
      // [{},{modificado},{}]
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          // modificacion
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      }); // []

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id); // [1,3 ]
    setCart(newArray);
  };

  const isInCart = (id) => {
    // 2

    let bool = cart.some((product) => product.id === id); // siempre devuelve un booleano
    return bool;
  };

  // funcion que determine cuantas unidades de un producto tengo
  const getQuantityById = (id) => {
    let product = cart.find((el) => el.id === id);
    return product?.quantity;
  };

  // funcion que determine el precio total
  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;

    // let total = 0
    // for( let i = 0; i < cart.length; i++){
    //   total = total + cart[i].quantity * cart[i].price
    // }
    // return total
  };

  // funcion que determine cuantos productos tengo
  const getTotalItems = ()=>{
    let total = cart.reduce((acc, elemento)=>{
      return acc + elemento.quantity
    }, 0)
    return total
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;

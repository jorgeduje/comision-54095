import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };

    addToCart( product )
    // la funcion addToCart
    
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;

// const sumar = (a)=>{
//   ...item
//   cantidad: 10
// }

// sumar(10)

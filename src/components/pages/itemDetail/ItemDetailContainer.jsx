import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

  const { id } = useParams()

  const [item, setItem] = useState({})

  useEffect(()=>{

    let itemEncontrado = products.find( (product)=> product.id === +id )
    const getProduct = new Promise( (resolve, reject)=>{
        resolve(itemEncontrado)
    })

    getProduct.then((res)=> setItem(res))

  }, [id])

  const onAdd = (cantidad) => {
    // console.log(item)
    // console.log(cantidad)

    let objetoCompleto = {...item, quantity: cantidad }
    //agreguemos
    console.log(objetoCompleto)
  }
    
  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;

// const sumar = (a)=>{
//   ...item
//   cantidad: 10
// }



// sumar(10)
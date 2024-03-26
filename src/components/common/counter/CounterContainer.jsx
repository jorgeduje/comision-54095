import { useState, useEffect } from "react";
import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";
import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = () => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepe");

  useEffect(() => {
    setContador(contador + 1);
  }, []);

  //  useEffect( ()=>{
  //   console.log("me ejecuto dentro del effect")
  // }) // SIN ARRAY DE DEPENDENCIAS

  // useEffect( ()=>{
  //   console.log("me ejecuto dentro del effect")
  // }, []) // ARRAY DE DEPENDENCIAS

  // useEffect( ()=>{
  //   console.log("me ejecuto dentro del effect")
  // }, [ nombre ]) // ARRAY DE DEPENDENCIAS

  console.log("me ejecuto siempre");

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("no podes menos de 1");
    }
  };

  console.log(nombre);

  let objectProps = {
    restar,
    sumar,
    contador,
    setNombre,
  };

  return (
    <CounterPresentacional {...objectProps} />
  );
};


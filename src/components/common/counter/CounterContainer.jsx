import { useState } from "react";

import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("maximo en stock");
    }
    if (navigator.vibrate) {
      // Hacer vibrar el dispositivo
      navigator.vibrate(100); // La duración de la vibración es de 200 milisegundos
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("no podes menos de 1");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
  };

  return <CounterPresentacional {...objectProps} />;
};

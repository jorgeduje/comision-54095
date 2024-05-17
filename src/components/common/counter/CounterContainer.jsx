import { useState } from "react";

import CounterPresentacional from "./CounterPresentacional";
import audioio from "../../../assets/alertios.mp3";
export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const isAndroid = () => {
    return /Android/.test(navigator.userAgent);
  };

  const isiOS = () => {
    return /iPhone|iPad|iPod/.test(navigator.userAgent);
  };
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("maximo en stock");
    }
    if (isAndroid()) {
      console.log(isAndroid());
      // Hacer vibrar el dispositivo solo si es Android
      if (navigator.vibrate) {
        navigator.vibrate(50); // La duración de la vibración es de 50 milisegundos
      }
    } else if (isiOS()) {
      console.log(isiOS());
      // Reproducir sonido solo si es iOS
      const sound = document.getElementById("alert-sound");
      if (sound) {
        sound.play();
      }
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

  return (
    <>
      <CounterPresentacional {...objectProps} />
      <audio id="alert-sound" src={audioio}></audio>
    </>
  );
};

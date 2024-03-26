
const CounterPresentacional = ( {restar, sumar, contador, setNombre} ) => {
  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={() => setNombre("juan")}>cambiar nombre</button>
    </div>
  );
};

export default CounterPresentacional;

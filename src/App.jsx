import { useState } from "react";
import { Counter } from "./components/common/counter/Counter";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  // name  ---> pepe
  // name ---> juan

  const [name, setName] = useState("pepe");

  // const cambiarNombre = (nuevoNombre) => {
  //   setName(nuevoNombre);
  // };
  

  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />

      <Counter />

      <h2>{name}</h2>
      {/* <button onClick={cambiarNombre}>Cambiar nombre</button> */}

      {/* <button onClick={cambiarNombre("fulanito")}>Cambiar nombre</button> */}
      {/* <button onClick={()=> cambiarNombre("fulanito")}>Cambiar nombre</button> */}
      <button onClick={()=>setName("juan")}>Cambiar</button>
    </div>
  );
}

export default App;


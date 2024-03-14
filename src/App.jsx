
import Footer from "./Footer.jsx"

function App() {

  let nombre = "pepe"

  const sumar = ()=>{
    console.log( 5 + 2 )
  }

  return <div>
    <h1>hola {nombre}  </h1>
    <h2>como estas?</h2>
    <button onClick={sumar}>Sumar</button>
    <Footer />
  </div>
}

export default App;
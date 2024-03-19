// importacion por defecto
// import Navbar from "./components/Navbar.jsx"

// importacion nombrada
// import {Navbar, array} from "./components/Navbar.jsx"

import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

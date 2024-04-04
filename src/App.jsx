import { CounterContainer } from "./components/common/counter/CounterContainer";
import { Layout } from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let x = "hola"
  return (
    <div>
      <CounterContainer />
      <CartContainer />
      <ItemListContainer gretting={x} /> 
    </div>
  );
}

export default App;

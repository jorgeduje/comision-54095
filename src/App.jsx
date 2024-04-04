import { CounterContainer } from "./components/common/counter/CounterContainer";
import { Layout } from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Layout>
        <ItemListContainer /> 
      </Layout>
    </div>
  );
}

export default App;

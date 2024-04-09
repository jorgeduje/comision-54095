import { Layout } from "./components/layout/Layout";
import CreateUsers from "./components/pages/fetchingData/CreateUsers";
import FetchingData from "./components/pages/fetchingData/FetchingData";

function App() {
  return (
    <div>
      <Layout>
        <CreateUsers />
      </Layout>
    </div>
  );
}

export default App;

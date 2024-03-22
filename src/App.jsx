import { ThemeProvider } from "@mui/material";
import PruebaComponentes from "./components/common/pruebaComponentes/PruebaComponentes";
import PruebaResponsive from "./components/common/pruebaResponsive/PruebaResponsive";
import { themaClaro } from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={themaClaro} >
      <div>
        <PruebaResponsive />
        <PruebaComponentes />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ShoppingCartProvider } from "./contexts/ShoppingCardContext";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default App;

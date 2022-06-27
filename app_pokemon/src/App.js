import React from "react";
import { Head } from "./components/Head/Head";
//import { Home } from "./pages/Home/Home";
import { Pokemons } from "./pages/Pokemons/Pokemons";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Head />
        <Pokemons />
      </BrowserRouter>
    </div>
  );
}

export default App;

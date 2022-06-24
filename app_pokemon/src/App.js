//import api from "./service/api";
import React from "react";
//import Img1 from "./images/img1";
import { Head } from "./components/Head/Head";
import { Pokemons } from "./pages/Pokemons/Pokemons";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Head />
      <Pokemons />
    </div>
  );
}

export default App;

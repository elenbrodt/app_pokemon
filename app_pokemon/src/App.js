import "./App.css";
import api from "./service/api";
import React, { useEffect, useState, useTransition } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
  });

  const searchPokemon = () => {
    api
      .get(`${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
        });
        setPokemonChosen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search button</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>Please choose a Pokemon</h1>
        ) : (
          <>
            <h1>{pokemonName}</h1>
            <img src={pokemon.img}></img>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

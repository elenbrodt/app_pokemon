import api from "../../service/api";
import * as S from "./style";
import React, { useState } from "react";
import { Grid, SearchIcon, TextField, IconButton } from "../Commons";
import { PokemonCard } from "../PokemonGrid/PokemonCard";

export function PokemonGrid() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    img: "",
    hp: "",
    typetwo: "",
  });

  const searchPokemon = () => {
    api
      .get(`${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          type: response.data.types[0].type.name,
          //typetwo: response.data.types[1].type.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
        });
        setPokemonChosen(true);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <S.Wrapper>
      <S.Search>
        <TextField
          variant="outlined"
          placeholder="Pesquisar Pokemón"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              searchPokemon();
              ev.preventDefault();
            }
          }}
          fullWidth
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            searchPokemon();
          }}
        >
          <SearchIcon />
        </IconButton>
      </S.Search>
      {!pokemonChosen ? (
        <h2>Lista de Todos os Pokemons</h2>
      ) : (
        <S.GridCardContentStyled>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={2}>
              <PokemonCard
                name={pokemon.name}
                type={pokemon.type}
                img={pokemon.img}
                hp={pokemon.hp}
                typetwo={pokemon.typetwo}
              ></PokemonCard>
            </Grid>
          </Grid>
        </S.GridCardContentStyled>
      )}
    </S.Wrapper>
  );
}

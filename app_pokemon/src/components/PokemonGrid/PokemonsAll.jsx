import React, { useEffect, useState, useCallback } from "react";
import "./PokemonsAll.css";
import * as S from "./style";
import { Grid, Button } from "../Commons";
import api from "../../service/api";
import { PokemonCard } from "../PokemonGrid/PokemonCard";

const PokemonsAll = () => {
  const NUMBER_POKEMONS = 12;
  const NUMBER_MAX_POKEMONS_API = 750;
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);
  const [pokemonSearch, setPokemonSearch] = useState("");

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    const pokemonsSearch = response.data.results.filter(({ name }) =>
      name.includes(pokemonSearch)
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);
  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get(`/pokemon`, {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setPokemons(response.data.results);
    console.log(response.data.results.index);
  }, []);
  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  const handleMorePokemons = useCallback(
    async (offset) => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });
      setPokemons((state) => [...state, ...response.data.results]);
      setPokemonsOffsetApi((state) => state + NUMBER_POKEMONS);
    },
    [NUMBER_POKEMONS]
  );
  console.log(pokemons.name);
  return (
    <>
      <S.GridCardContentStyled>
        <Grid container spacing={10} justifyContent="space-between">
          {pokemons.map(({ name }) => (
            <Grid item xs={12} md={3} alignContent="space-between">
              <PokemonCard key={name} name={name}></PokemonCard>
            </Grid>
          ))}
        </Grid>
      </S.GridCardContentStyled>
      <Button
        type="button"
        onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        variant="contained"
      >
        CARREGAR MAIS
      </Button>
    </>
  );
};

export default PokemonsAll;

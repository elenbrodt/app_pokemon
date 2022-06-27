import { Card } from "../Commons";
import React, { useState, useEffect } from "react";
import { CardContentStyled, ValueStyled, ImgStyled, CardInfo } from "./style";
import api from "../../service/api";

export function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState({});
  var color = "";
  useEffect(() => {
    api.get(`/pokemon/${name}`).then((response) => {
      const { id, types, sprites, stats } = response.data;
      console.log(types[0].type.name);
      setPokemon({
        id,
        hp: stats[0].base_stat,
        image: sprites.other.dream_world.front_default,
        type: types[0].type.name,
      });
    });
  }, [name]);
  switch (pokemon.type) {
    case "grass":
      color = "#46D0A7";
      break;
    case "electric":
      color = "#FFCE4B";
      break;
    case "water":
      color = "#77BDFE";
      break;
    case "fire":
      color = "#FB6C6C";
      break;
    case "psychic":
      color = "#F2CDD6";
      break;
    case "bug":
      color = "#A499C1";
      break;
    case "ghost":
      color = "#888888";
      break;
  }
  return (
    <Card>
      <CardContentStyled color={color}>
        <div>
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`}></img>
        </div>
        <CardInfo>
          <div>
            <ValueStyled>#{pokemon.id}</ValueStyled>
            <ValueStyled>{name}</ValueStyled>
            <ValueStyled>hp: {pokemon.hp}</ValueStyled>
          </div>
        </CardInfo>
      </CardContentStyled>
    </Card>
  );
}

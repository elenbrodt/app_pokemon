import { Card } from "../Commons";
import React from "react";
import { CardContentStyled, ValueStyled, ImgStyled, CardInfo } from "./style";

export function PokemonCard({ name, type, img, hp }) {
  var color = "";

  switch (type) {
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
          <img src={img} alt={`Imagem do pokémon ${name}`}></img>
        </div>
        <CardInfo>
          <div>
            <ValueStyled>{name}</ValueStyled>
            <ValueStyled> {type}</ValueStyled>
            <ValueStyled>hp: {hp}</ValueStyled>
          </div>
        </CardInfo>
      </CardContentStyled>
    </Card>
  );
}

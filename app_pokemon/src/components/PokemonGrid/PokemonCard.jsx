import { Card } from "../Commons";
import React from "react";
import { CardContentStyled, ValueStyled, ImgStyled, CardInfo } from "./style";

export function PokemonCard({ name, type, img, hp, typetwo }) {
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
        <CardInfo>
          <ValueStyled>{name}</ValueStyled>
          <ValueStyled>Tipo: {type}</ValueStyled>
          <ValueStyled>
            HP: {hp} {typetwo}
          </ValueStyled>
        </CardInfo>

        <ImgStyled>
          <img src={img}></img>
        </ImgStyled>
      </CardContentStyled>
    </Card>
  );
}

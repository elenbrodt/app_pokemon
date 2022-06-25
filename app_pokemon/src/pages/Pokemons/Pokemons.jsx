import * as S from "./style";
import { PokemonGrid } from "../../components/PokemonGrid/PokemonGrid";
export function Pokemons() {
  return (
    <S.Wrapper>
      <S.Title>
        <h1>Mais de 250 Pokemóns para você escolher o seu favorito</h1>
      </S.Title>
      <PokemonGrid />
    </S.Wrapper>
  );
}

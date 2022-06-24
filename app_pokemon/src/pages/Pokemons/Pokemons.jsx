import * as S from "./style";
import { Search } from "../../components/Search/Search";
export function Pokemons() {
  return (
    <S.Wrapper>
      <S.Title>
        <h1>Mais de 250 Pokemóns para você escolher o seu favorito</h1>
      </S.Title>
      <Search />
      <S.PokemonsGrid>
        <h1>Lista Pokemons</h1>
      </S.PokemonsGrid>
    </S.Wrapper>
  );
}

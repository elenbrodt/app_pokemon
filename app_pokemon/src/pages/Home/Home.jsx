import * as S from "./style";
import banner from "../../images/banner.png";
import { Button } from "../../components/Commons";

export function Home() {
  return (
    <S.Wrapper>
      <S.HomeInfo>
        <h1>
          Qual pokemón você <mark>escolheria</mark>?
        </h1>
        <p>
          {" "}
          Você pode saber o tipo de Pokemón, seus pontos fortes, fracos e
          habilidades{" "}
        </p>
        <Button variant="contained">Veja os pokemóns</Button>
      </S.HomeInfo>
      <S.HomeImg src={banner} alt="banner-pikachu" />
    </S.Wrapper>
  );
}

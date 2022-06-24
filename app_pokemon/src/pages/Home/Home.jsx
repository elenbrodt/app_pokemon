import * as S from "./style";
import banner from "../../images/banner.png";

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
        <a href="#" className="HomeButton">
          Veja os pokemóns
        </a>
      </S.HomeInfo>
      <S.HomeImg src={banner} alt="banner-pikachu" />
    </S.Wrapper>
  );
}

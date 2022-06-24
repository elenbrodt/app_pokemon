import Logo from "../../images/Logo";
import * as S from "./style";

export function Head() {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <Logo />
        </div>
        <S.Nav>
          <S.Pages>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pokemón</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </S.Pages>
        </S.Nav>
      </S.Header>
    </S.Wrapper>
  );
}

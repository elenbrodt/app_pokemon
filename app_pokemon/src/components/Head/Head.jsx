import Logo from "../../images/Logo";
import * as S from "./style";
import { Link } from "react-router-dom";

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
              <a>Home</a>
            </li>
            <li>
              <a>Pokemon</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
          </S.Pages>
        </S.Nav>
      </S.Header>
    </S.Wrapper>
  );
}

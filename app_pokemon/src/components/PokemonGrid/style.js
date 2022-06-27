import styled from "styled-components";
import { CardContent } from "../Commons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;
export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ color }) => color || "#5d78ff"};
  img {
    height: 80px;
    width: 80px;
  }
`;
export const ValueStyled = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 1088px;
  justify-content: center;
`;
export const GridCardContentStyled = styled(CardContent)`
  display: flex;
  width: 1440px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  border: none;
  border-radius: 8px;
`;

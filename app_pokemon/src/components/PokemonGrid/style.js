import styled from "styled-components";
import { CardContent, Typography } from "../Commons";

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
  border: none;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || "#5d78ff"};
`;
export const ValueStyled = styled(Typography)`
  font-size: 1.5rem;
  text-align: left;
  color: white;
`;
export const ImgStyled = styled.div`
  text-align: center;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 1088px;
  justify-content: center;
`;
export const GridCardContentStyled = styled(CardContent)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

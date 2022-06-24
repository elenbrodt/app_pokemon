import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 14px;
`;
export const Header = styled.header`
  display: flex;
  width: 1125px;
  align-items: center;
  justify-content: space-between;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: items-center;
  justify-content: space-between;
`;
export const Pages = styled.ul`
  width: 658px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  list-style-type: none;

  a {
    text-decoration: none;
    font-size: 32px;
    color: black;
    cursor: pointer;
  }
`;

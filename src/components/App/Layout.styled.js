import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
  min-width: 270px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid var(--color-text);
`;

export const Nav = styled.nav`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 37px;
`

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

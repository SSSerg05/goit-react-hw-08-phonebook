import styled from "styled-components"; //{ ThemeProvider }
import { NavLink } from "react-router-dom";

// export const Theme = styled.ThemeProvider`
//   background-color: ${(props) =>
//     props.theme.background-color}; 
//   color: ${(props) =>
//     props.theme.color};
// `;

export const Container = styled.div`
  min-width: 270px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid black;
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
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

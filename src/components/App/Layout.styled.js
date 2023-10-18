import styled from "styled-components"; //{ ThemeProvider }
import { NavLink } from "react-router-dom";

// export const Theme = styled.ThemeProvider`
//   background-color: ${(props) =>
//     props.theme.background-color}; 
//   color: ${(props) =>
//     props.theme.color};
// `;

export const Container = styled.div`
  max-width: 960px;
  min-width: 270px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

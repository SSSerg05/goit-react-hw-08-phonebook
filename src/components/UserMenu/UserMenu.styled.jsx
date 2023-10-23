import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const UserMenuList = styled.ul`
  display: flex;
`;

export const UserMenuLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

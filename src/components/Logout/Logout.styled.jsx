import styled from "@emotion/styled";

export const LoginContainer = styled.button`
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  border-radius: 4px;
  border: none;
  outline: none;

  padding: 4px 16px;

  &:hover {
    color: white;
    background-color: orangered;
  }

  &:active {
    color: white;
    background-color: red;
  }
`;

export const UserName = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 0.85rem;
  color: black;
`


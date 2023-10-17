import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  margin-right: 12px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
 
  &:hover {
    color: white;
    background-color: #f44336;
  }

  &:active {
    color: white;
    background-color: red;
  }
`
export const ButtonDelete = styled(Button)`
  color: #f44336;
`

export const ButtonEdit = styled(Button)`
  color: #1976d2;
`

export const ButtonAddContact = styled(Button)`
  color: green;
`

export const ButtonSaveContact = styled(Button)`
  margin-top: 48px;
  width: 68px;
  background-color: #1976d2;
`
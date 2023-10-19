import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
 
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
  width: 150px;
  justify-content: space-around;
  color: green;
  background-color: #e2e5e8;
`

export const ButtonSaveContact = styled(Button)`
  /* margin-top: 48px; */
  width: 68px;
  color: white;
  background-color: #1976d2;
`

export const ButtonsBox = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`
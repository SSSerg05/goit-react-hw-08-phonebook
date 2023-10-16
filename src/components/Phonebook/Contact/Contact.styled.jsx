import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
`

export const Name = styled.p`
  width: 100%;
  /* min-width: 200px; */
  margin: 0;
  padding: 4px;
  flex-grow: 1;
`
// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   margin: 0;
//   margin-right: 12px;
//   border: none;
//   border-radius: 4px;
//   background-color: transparent;
//   cursor: pointer;
 
//   &:hover {
//     color: white;
//     background-color: #f44336;
//   }

//   &:active {
//     color: white;
//     background-color: red;
//   }
// `
// export const ButtonDelete = styled(Button)`
//   color: #f44336;
// `

// export const ButtonEdit = styled(Button)`
//   color: darkgray;
// `

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  cursor: pointer;
`

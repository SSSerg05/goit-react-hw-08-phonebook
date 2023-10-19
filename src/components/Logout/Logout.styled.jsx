import styled from "@emotion/styled/macro";


export const UserName = styled.span`
  display: block;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 0.85rem;
  color: black;
`;

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

  &::before {
    content: attr(text);
  }

  &:hover::before {
    content: attr(hover-text);
  }

  &:hover {
    color: white;
    background-color: orangered;
    & ${UserName} {
      color: white;
      background-color: orangered;
     } 
  }

  &:active {
    color: white;
    background-color: red;
    & ${UserName} {
      color: white;
      background-color: red;
     } 
  }
`;

// .change-photos:hover .change-photo:nth-of-type(1) {
//   display: none;
// }

// .change-photos:hover .change-photo:nth-of-type(2) {
//   display: block;
// }

// .change-photos:hover {
//   cursor: pointer;
// }


import styled from "@emotion/styled";

export const ListContacts = styled.ul`
  text-decoration: none;
  margin: 0;
  padding-left: 0;
  list-style: none;
  overflow-y: auto;
  width: 100%;
  max-height: calc(100vh - 391px); // 70+16+50+30-16+32+16+104+16+27+16+30+30=391
  min-height: 240px;
`
export const ListItem = styled.li`
  background-color: lightsteelblue;

  &:nth-of-type(odd) {
    background-color: lightcyan;
  }
`

export const WarningBox = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: orangered;
`

export const ItemButton = styled.button`
  display: inline-block;
  outline: 1px solid black;
  border: none;
  min-width: 75px;
  height: 24px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  border-radius: 5px;

  &:hover, &:active {
    cursor: pointer;
    background-color: cyan;
    border: 1px solit black;
  }

  &:active {
    background-color: tomato;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;
  }
`

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const colorsValid = { 
  error: 'red',       // textError + textHelp
  success: 'green',   // textError + textHelp
  valid: 'green',     // border input
  invalid: 'red',     // border input
}

export const FieldBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  color: var(--color-text);
  background-color: var(--color-bg);

  margin-bottom: 1rem;
  margin-top: 1rem;

  color: ${(props) =>
    colorsValid[props.valid] ?? 'gray'}; 
`

export const FieldLabel = styled.label`
  display: block;
  width: 100%;
  color: var(--color-text);
  background-color: var(--color-bg);
`

export const FieldInput = styled.input`
  display: block;
  width: calc(100% - 2*4px);
  outline: 1px solid  ${(props) =>
    colorsValid[props.valid] ?? 'rgba(33, 33, 33, 0.2)'}; 
  background-color:  var(--color-bgi);
  color: var(--color-text);
  border-radius: 4px;
  border: none;
  margin-top: 4px;
  padding: 8px 4px;


  &:hover,
  &:focus-within {
    outline: 1px solid blue;
    background-color: rgb(232, 240, 254);
    color: black;
    transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`

export const FieldPosition = styled.span`
  position: relative;
  margin-top: 4px;
`
export const FieldFeedback = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.875rem;
`
export const FieldHelpText = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  font-size: 0.75rem;
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 0;
  text-decoration: none;
  
  font-weight: 500;
  border-radius: 4px;
  border: none;
  color:  #1976d2;;

  &:hover,
  &:focus {
    color: orangered;
  }
  &:active {
    color: red;
  }
`;
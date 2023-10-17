import styled from "@emotion/styled";

const colorsValid = { 
  error: 'red', 
  success: 'green', 
  valid: 'green', 
  invalid: 'red', 
}

export const FieldBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  margin-bottom: 1rem;
  margin-top: 1rem;

  color: ${(props) =>
    colorsValid[props.valid] ?? 'black'}; 
`

export const FieldLabel = styled.label`
  display: block;
  width: 100%;
`

export const FieldInput = styled.input`
  display: block;
  width: calc(100% - 2*4px);
  outline: 1px solid  ${(props) =>
    colorsValid[props.valid] ?? 'rgba(33, 33, 33, 0.2)'}; 
  background-color: transparent;
  border-radius: 4px;
  border: none;
  margin-top: 4px;
  padding: 8px 4px;

  &:hover,
  &:focus-within {
    outline: 1px solid blue;
    background-color: rgb(232, 240, 254);
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
  position: absolute;
  bottom: -14px;
  left: 4px;
  font-size: 0.75rem;
`
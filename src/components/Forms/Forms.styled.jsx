import styled from "@emotion/styled";

export const FieldBox = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 8px;
`

export const FieldLabel = styled.label`
  display: block;
`

export const FieldInput = styled.input`
    display: block;
    width: calc(100% - 2*4px);
    outline: 1px solid rgba(33, 33, 33, 0.2);
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
import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 8px;
`

export const FieldContact = styled.div`
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
`

export const FieldNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`

export const FieldName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`

export const Name = styled.p`
  /* width: 100%; */
  margin: 0;
  padding: 2px 8px;
  flex-grow: 1;
`

export const Number = styled.p`
  /* width: 100%; */
  margin: 0;
  padding: 2px 8px;
  flex-grow: 1;
`

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

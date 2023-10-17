import styled from "@emotion/styled";

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em 0;
  width: 132px;
  background: ${(props) =>
    props.primary ? '#337ab7' : '#f0f0f0f'};
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-family: Audiowide;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) =>
    props.primary ? '#f0f0f0' : '#1c1c1c'};
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;
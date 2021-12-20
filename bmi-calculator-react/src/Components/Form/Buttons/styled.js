import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: teal;
  color: aliceblue;
  border: none;
  max-width: 50%;
  transition: transform 1s;

  &:hover {
    background-color: rgb(1, 102, 102);
    transform: scale(1.1);
  }
`;

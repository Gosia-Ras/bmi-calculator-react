import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: #eb3b5a;
  color: aliceblue;
  border: none;
  max-width: 50%;
  transition: transform 3s linear;

  &:hover {
    background-color: #e84f6a;
    transform: scale(1.1);
  }
`;

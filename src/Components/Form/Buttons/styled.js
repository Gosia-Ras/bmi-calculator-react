import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.submit};
  color: ${({ theme }) => theme.color.textBlue};
  border: none;
  max-width: 50%;
  transition: transform 3s linear;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
    transform: scale(1.1);
  }
`;

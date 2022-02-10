import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.royalBlue};
  color: ${({ theme }) => theme.color.textBlue};
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
`;

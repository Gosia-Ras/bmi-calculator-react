import styled from "styled-components";

export const StyledResult = styled.p`
  text-align: center;
  font-weight: 800;
  color: ${({ danger }) => (danger ? "red" : "#126E3D")};

`;

export const Wrapper = styled.div`
  padding: 20px;
`;

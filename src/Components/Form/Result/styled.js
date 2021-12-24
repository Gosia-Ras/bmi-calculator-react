import styled from "styled-components";

export const StyledResult = styled.p`
  padding: 15px;
  margin: 0px auto;
  max-width: max-content;
  font-weight: 800;]

  ${(bmi) => {
    if (bmi > 18.5 && bmi <= 24.9) {
      return `
      color: green`;
    } else {
      return `color: red`;
    }
  }}
`;

export const StyledResultWrapper = styled.div`
  padding: 20px;
  height: 100px;
`;

import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ bmi, classification }) => {
  return (
    <StyledResultWrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi}</>}</StyledResult>
      <StyledResult>{classification}</StyledResult>
    </StyledResultWrapper>
  );
};
export default Result;

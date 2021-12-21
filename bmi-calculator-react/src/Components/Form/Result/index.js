import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ bmi }) => {
  return (
    <StyledResultWrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi}</>}</StyledResult>
    </StyledResultWrapper>
  );
};
export default Result;

import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ bmi, classification }) => {
  return (
    <StyledResultWrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi.toFixed(2)}</>}</StyledResult>
      <StyledResult>{classification}</StyledResult>
    </StyledResultWrapper>
  );
};
export default Result;

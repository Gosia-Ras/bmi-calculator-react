import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ bmi, getBMI }) => {
  return (
    <StyledResultWrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi.toFixed(2)}</>}</StyledResult>
      <StyledResult>{getBMI()}</StyledResult>
    </StyledResultWrapper>
  );
};
export default Result;

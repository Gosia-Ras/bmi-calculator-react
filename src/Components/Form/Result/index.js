import { StyledResult, Wrapper } from "./styled";

const Result = ({ bmi }) => {
  const getbmi = (bmi) => {
    if (bmi < 18.5 && bmi > 0) {
      return "Underweight";
    }
    if (bmi > 26) {
      return "Overweight";
    }
    if (bmi > 18.5 && bmi < 26) {
      return "Healthy";
    }
  };
  return (
    <Wrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi.toFixed(2)}</>}</StyledResult>
      <StyledResult>{getbmi(bmi)}</StyledResult>
    </Wrapper>
  );
};
export default Result;

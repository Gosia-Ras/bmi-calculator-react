import { StyledResult, Wrapper } from "./styled";

const getBMIStatus = (bmi) => {
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

const Result = ({ bmi }) => {
  const bmiStatus = getBMIStatus(bmi);

  return (
    <Wrapper>
      <StyledResult danger={bmiStatus !== "Healthy"}>
        {bmi && <>Your BMI is {bmi.toFixed(2)}</>}
      </StyledResult>
      <StyledResult danger={bmiStatus !== "Healthy"}>{bmiStatus}</StyledResult>
    </Wrapper>
  );
};
export default Result;

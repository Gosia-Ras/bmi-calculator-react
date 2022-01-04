import { StyledResult, Wrapper } from "./styled";

const Result = ({ bmi }) => {
  const renderBmiDescriptionStyledResult = (bmi) => {
    if (bmi < 18.5 && bmi > 0) {
      return (
        <StyledResult style={{ color: "#620a0c" }}>
          {"Underweight"}
        </StyledResult>
      );
    }
    if (bmi > 26) {
      return (
        <StyledResult style={{ color: "#620a0c" }}>{"Overweight"}</StyledResult>
      );
    }
    if (bmi > 18.5 && bmi < 26) {
      return (
        <StyledResult style={{ color: "#053a1f" }}>{"Healthy"}</StyledResult>
      );
    }
  };
  return (
    <Wrapper>
      <StyledResult>{bmi && <>Your BMI is {bmi.toFixed(2)}</>}</StyledResult>
      {renderBmiDescriptionStyledResult(bmi)}
    </Wrapper>
  );
};
export default Result;

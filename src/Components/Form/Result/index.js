import { StyledResult, Wrapper } from "./styled";

const Result = ({ bmi }) => {
  const getbmi = (bmi) => {
    if (bmi < 18.5 && bmi > 0) {
      return <div>Underweight</div>;
    }
    if (bmi > 26) {
      return <div>Overweight</div>;
    }
    if (bmi > 18.5 && bmi < 26) {
      return <div>Healthy</div>;
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

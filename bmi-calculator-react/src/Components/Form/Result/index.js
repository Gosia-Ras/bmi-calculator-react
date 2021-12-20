import { StyledResult } from "./styled";

const Result = ({ bmi }) => {
  return <StyledResult>Your BMI is {bmi.toFixed(2)}</StyledResult>;
};
export default Result;

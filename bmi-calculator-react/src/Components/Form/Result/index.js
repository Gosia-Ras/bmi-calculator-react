import { StyledResult } from "./styled";

const Result = ({ bmi }) => {
  return <StyledResult>{bmi && <>Your BMI is {bmi}</>}</StyledResult>;
};
export default Result;

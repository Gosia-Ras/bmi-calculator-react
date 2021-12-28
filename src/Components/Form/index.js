import { useState } from "react";
import Button from "./Buttons";
import Result from "./Result";
import Formula from "./Formula";
import { StyledForm, StyledInput, StyledTitle } from "./styled";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();

  const calculateBMI = () => {
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };

  const getBMI = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi < 35) {
      return "Obesity class I";
    }
    if (bmi < 40) {
      return "Obesity class I";
    } else {
      return "Obesity class III";
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateBMI();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Formula />
      <StyledTitle>Weight</StyledTitle>
      <StyledInput
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
        required
        min={26}
        max={635}
        placeholder="Enter weight in KG"
      />
      <StyledTitle>Height</StyledTitle>
      <StyledInput
        value={height}
        onChange={({ target }) => setHeight(target.value)}
        required
        min={54}
        max={272}
        placeholder="Enter height in CM"
      />
      <Button />
      <Result bmi={bmi} getBMI={getBMI}/>
    </StyledForm>
  );
};

export default Form;

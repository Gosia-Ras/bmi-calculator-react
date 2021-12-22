import { useState } from "react";
import Button from "./Buttons";
import Result from "./Result";
import Formula from "./Formula";
import { StyledForm, StyledInput, StyledTitle } from "./styled";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [classification, setClassification] = useState();
  const [bmi, setBmi] = useState();

  const calculate = () => {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmi);
    if (bmi < 18.5) {
      setClassification("Under Weight");
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setClassification("Healthy");
    } else if (bmi > 24.9 && bmi < 30) {
      setClassification("Overweight");
    } else {
      setClassification("Obese");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculate();
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
      <Result bmi={bmi} classification={classification}/>
    </StyledForm>
  );
};

export default Form;

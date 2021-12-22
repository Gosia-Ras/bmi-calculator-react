import { useState } from "react";
import Button from "./Buttons";
import Result from "./Result";
import { StyledForm, StyledInput, StyledTitle } from "./styled";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();

  const calculate = () => {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmi);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculate();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
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
      <Result bmi={bmi} />
    </StyledForm>
  );
};

export default Form;

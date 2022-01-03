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
        type="number"
        onChange={({ target }) => setWeight(target.value)}
        required
        min="26"
        max="635"
        placeholder="Enter weight in KG"
      />
      <StyledTitle>Height</StyledTitle>
      <StyledInput
        value={height}
        onChange={({ target }) => setHeight(target.value)}
        required
        type="number"
        min="54"
        max="272"
        placeholder="Enter height in CM"
      />
      <Button />
      <Result bmi={bmi} />
    </StyledForm>
  );
};

export default Form;

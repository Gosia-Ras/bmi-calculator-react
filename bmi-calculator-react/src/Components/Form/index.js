import { useState } from "react";
import Button from "./Buttons";
import Result from "./Result";
import { StyledForm, StyledInput } from "./styled";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setMass] = useState("");
  const [bmi, setBmi] = useState(0);

  const formattedbmi = Math.round(bmi * 100) / 100;

  const calculate = (event) => {
    event.preventDefault();
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    setBmi(bmi);
  };

  return (
    <StyledForm onSubmit={calculate} formattedbmi={formattedbmi}>
      <p>Weight in KG</p>
      <StyledInput
        value={weight}
        onChange={({ target }) => setMass(target.value)}
        required
        min={1}
        placeholder="Enter weight in KG"
      />
      <p>Height in CM</p>
      <StyledInput
        value={height}
        onChange={({ target }) => setHeight(target.value)}
        required
        min={54}
        placeholder="Enter height in CM"
      />
      <Button />
      <Result bmi={bmi} />
    </StyledForm>
  );
};

export default Form;

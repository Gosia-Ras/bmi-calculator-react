import { useState } from "react";
import Button from "./Buttons";
import Result from "./Result";

const Form = () => {
  const [height, setHeight] = useState(0);
  const [weight, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const formattedbmi = Math.round(bmi * 100) / 100;

  const calculate = (event) => {
    event.preventDefault();
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    
    setBmi(bmi);
  };

  return (
    <form 
      onSubmit={calculate} 
      formattedbmi={formattedbmi} 
      className="form">
      <p>Weight</p>
      <input
        value={weight}
        onChange={(event) => setMass(event.target.value)}
        required
        min={1}
      />
      <span className="span">KG</span>
      <p>Height</p>
      <input
        value={height}
        onChange={(event) => setHeight(event.target.value)}
        required
        min={54}
      />
      <span className="span">CM</span>
      <Button />
      <Result bmi={bmi} />
    </form>
  );
};

export default Form;

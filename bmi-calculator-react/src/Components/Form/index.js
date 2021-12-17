import Button from "./Buttons";
import Result from "./Result";

const Form = () => {
  return (
    <form className="form js-form">
      <label>
        <input
          className="js-metric"
          type="radio"
          value="metric"
          name="units"
          id="bmi-metric"
        />
        Metric
      </label>
      <label className="form__label">
        <input
          className="js-imperial"
          type="radio"
          value="imperial"
          name="units"
          required
        />
        Imperial
      </label>
      <p>Weight</p>
      <input
        className="form__input"
        type="number"
        id="bmi-weight"
        min="1"
        required
      />
      <span className="js-weightSpan">KG</span>
      <p>Height</p>
      <input
        className="form__input"
        type="number"
        id="bmi-height"
        min="54"
        required
      />
      <span className="js-heightSpan">CM</span>
      <Button />
      <Result />
    </form>
  );
};

export default Form;

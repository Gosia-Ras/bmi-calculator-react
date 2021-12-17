import Header from "./Components/Header";
import Form from "./Components/Form";
import Container from "./Components/Container";
import Paragraph from "./Components/Paragraph";
import Formula from "./Components/Formula";

function App() {
  return (
    <Container>
      <Header title="BMI Calculator" />
      <Paragraph
        text="Use this calculator to check your body mass index (BMI) and find out if
      you're a healthy weight."
      />
      <Form />
      <Formula formula="Formula for BMI = weight (kg) / height (m)2" />
    </Container>
  );
}

export default App;

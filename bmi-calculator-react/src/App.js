import Header from "./Components/Header";
import Form from "./Components/Form";
import Container from "./Components/Container";
import Paragraph from "./Components/Paragraph";
import Formula from "./Components/Formula";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Header title="BMI Calculator" />
      <Paragraph
        title="Use this calculator to check your body mass index (BMI) and find out if
      you're a healthy weight."
      />
      <Form />
      <Formula title="Formula for BMI = weight (kg) / height (m)2" />
      <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
}

export default App;

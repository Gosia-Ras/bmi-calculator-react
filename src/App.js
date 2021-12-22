import Header from "./Components/Header";
import Form from "./Components/Form";
import Container from "./Components/Container";
import Paragraph from "./Components/Paragraph";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Container>
        <Header title="Adult BMI Calculator" />
        <Paragraph
          title="Use this calculator to check your body mass index (BMI) and find out if
      you're a healthy weight."
        />
        <Form />
      </Container>
      <Footer title="Coded in 2021 by Malgorzata Ras" />
    </>
  );
}

export default App;

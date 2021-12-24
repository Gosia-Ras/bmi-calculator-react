import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import { StyledParagraph } from "./Components/Paragraph/styled";
import { StyledContainer} from "./Components/Container/styled";

function App() {
  return (
    <>
      <StyledContainer>
        <Header title="Adult BMI Calculator" />
        <StyledParagraph>
          Use this calculator to check your body mass index (BMI) and find out
          if you're a healthy weight.
        </StyledParagraph>
        <Form />
      </StyledContainer>
      <Footer title="Coded in 2021 by Malgorzata Ras" />
    </>
  );
}

export default App;

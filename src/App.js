import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./globalStyles";
import { Button, Col, Container, Header, Row, Text } from "./home.js";
import hero from "./assets/home1.png";
import Navbar from "./components/Navbar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Row>
          <Col>
            <Header>Welcome to breast cancer care!</Header>
            <Text>
              We are focused on building awareness to prevent and diagnose
              breast cancer
            </Text>
            <Button>Take the test </Button>
          </Col>
          <img src={hero} />
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;

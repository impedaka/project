import React from "react";
import { Container, Header, Text } from "../page";

const TestPage = () => {
  return (
    <Container>
      <Header>Test</Header>
      <Text style={{ width: "400px" }}>
        Calculate probablity of cancer with our machine learning based test
      </Text>
      <br />
      <Text>(Select all that apply)</Text>
    </Container>
  );
};

export default TestPage;

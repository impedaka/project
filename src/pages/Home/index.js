import React from "react";

import hero from "../../assets/home1.png";
import { Button, Container } from "./home.js";
import { Row, Col, Text, Header } from "../page";
const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>Welcome to breast cancer care!</Header>
          <Text>
            We are focused on building awareness to prevent and diagnose breast
            cancer
          </Text>
          <Button>Take the test </Button>
        </Col>
        <img src={hero} alt="hero" />
      </Row>
    </Container>
  );
};

export default Homepage;

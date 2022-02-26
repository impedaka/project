import React from "react";

import { Button, Container, Wrapper } from "./home.js";
import { Row, Col, Text, Header, SubText } from "../page";
const Homepage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header>❤️face cancer with kindness</Header>
            <SubText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              sapien, et vitae facilisi.
            </SubText>
          </Col>
        </Row>
      </Container>
      <Wrapper></Wrapper>
    </>
  );
};

export default Homepage;

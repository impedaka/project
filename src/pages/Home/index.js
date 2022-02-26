import React from "react";

import person1 from "../../assets/person.png";
import person2 from "../../assets/person3.png";
import person3 from "../../assets/person2.png";
import { Button, Container, SmallHeader, SmallText, Wrapper } from "./home.js";
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
      <Wrapper>
        <Header>Inspiring Stories</Header>
        <Col>
          <Row style={{ justifyContent: "space-around" }}>
            <img src={person1} />
            <Col>
              <SmallHeader>Sarah Jones</SmallHeader>
              <SmallText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <Col>
              <SmallHeader>Sarah Jones</SmallHeader>
              <SmallText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
            <img src={person2} />
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <img src={person3} />
            <Col>
              <SmallHeader>Sarah Jones</SmallHeader>
              <SmallText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                aenean pharetra nibh consectetur proin sed. Vel sed vel mi,
                facilisis placerat at diam massa. Consequat sit enim eget
                auctor.
              </SmallText>
            </Col>
          </Row>
          <Button>Read More > </Button>
        </Col>
      </Wrapper>
    </>
  );
};

export default Homepage;

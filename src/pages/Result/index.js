import React from "react";
import Result from "../../assets/result.png";
import { SmallHeader } from "../Home/home";
import { Col, Header, Row, Text } from "../page";
import { ResultBg } from "./Result";
const ResultPage = () => {
  return (
    <>
      <ResultBg>
        <Header>Result</Header>
        <Row>
          <Col>
            <SmallHeader>Details</SmallHeader>
            <Text style={{ width: "530px" }}>
             {localStorage.getItem("result")}
            </Text>
          </Col>
          <img src={Result} />
        </Row>
      </ResultBg>
    </>
  );
};

export default ResultPage;

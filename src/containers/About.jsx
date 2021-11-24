import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container className="aboutContainer" fluid>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default About;

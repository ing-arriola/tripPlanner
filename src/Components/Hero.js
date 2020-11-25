import React from "react";
import background from "../Assets/header.svg";
import { Container, Row, Col } from "react-bootstrap";
const Hero = () => {
  return (
    <header className="hero">
      <Container>
        <Row>
          <Col className="text-light text-center hero-text">
            <h1 className="adventure-title ">Plan your Trip</h1>
            <p className="adventure-name"> My Adventures in Japan</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Hero;

/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import BImage from "./images/doodle-1.png";
import FinalLearn from "./images/final-learn.png";
import Btn from "./Btn";

class BSTesting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              <Col md={4}>
                <Btn />
              </Col>
              <Col md={4}>
                <Btn />
              </Col>
              <Col md={4}>
                <Btn />
              </Col>
              <Col md={4}>
                <Btn />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const styles = {
  Row1: {
    backgroundColor: "red",
    color: "white",
  },
  Row2: {
    backgroundColor: "green",
    color: "black",
  },
};

export default BSTesting;

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

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container style={styles.AboutUs}>
          <h1 style={styles.h1}>About Us</h1>
          <img src={FinalLearn} alt="About Us" style={styles.Image} />
          <p style={styles.Para}>
            You can learn anything. Expert-created content and resources for
            every course and level. Always free. Spend an afternoon brushing up
            on statistics. Discover how the Krebs cycle works. Learn about the
            fundamentals of music notation. An education platform that partners
            with top universities and organizations worldwide, to offer courses
            online for anyone to take, for free.
          </p>
        </Container>
      </div>
    );
  }
}

const styles = {
  AboutUs: {
    backgroundImage: "url(" + BImage + ")",
  },
  h1: {
    color: "#565252",
    fontSize: "40px",
    fontWeight: 800,
    fontFamily: "Poppins",
    textTransform: "uppercase",
    textAlign: "center",
  },
  Image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom: "5%",
    marginTop: "5%",
  },
  Para: {
    padding: "21px",
    fontWeight: "300",
    fontSize: 20,
    textAlign: "center",
    marginTop: "5%",
    marginRight: "20%",
    marginBottom: "5%",
    marginLeft: "20%",
  },
};

export default AboutUs;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { render } from "react-dom";
import Lms1 from "./images/lms1.png";
import Lms2 from "./images/lms2.png";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <Carousel style={styles.Carousel}>
        <Carousel.Item>
          <img className="d-block w-100" src={Lms1} alt="LMS-1" />
          <Carousel.Caption>
            <Button style={styles.CaptionOne} disabled>
              WELCOME TO LMS
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Lms2} alt="LMS-2" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

const styles = {
  CaptionOne: {
    color: "white",
    fontFamily: "Poppins",
    backgroundColor: "#fec00f",
    border: "1px solid white",
    borderRadius: "10px",
    padding: 10,
  },
};

export default Slider;

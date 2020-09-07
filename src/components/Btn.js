/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Btn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button style={styles.Button}>Click Me!</Button>;
  }
}

const styles = {
  Button: {
    color: "white",
    backgroundColor: "LightGreen",
    fontFamily: "Poppins",
    fontSize: 20,
  },
};

export default Btn;

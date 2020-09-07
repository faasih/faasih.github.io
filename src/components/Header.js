/* eslint-disable no-sequences */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleHover.bind();
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {
        color: "white",
        cursor: "pointer",
        backgroundColor: "transparent",
        borderColor: "none",
      };
    } else {
      linkStyle = { color: "white" };
    }
    return (
      <div>
        <Navbar style={styles.Header} variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
          </Nav>
          <Button
            style={(styles.EnrollBtn, linkStyle)}
            onMouseEnter={this.toggleHover}
          >
            Enroll Now
          </Button>{" "}
        </Navbar>
      </div>
    );
  }
}

const styles = {
  // EnrollBtn: {
  //   color: "#fff",
  //   borderColor: "#fdfdfd",
  //   backgroundColor: "transparent",
  // },
  Header: {
    backgroundColor: "#132A66",
    fontFamily: "Poppins",
    color: "#ffffff",
  },
};

export default Header;

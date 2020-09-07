/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.root}>
        {/* {this.props.imageUrl ? (
          <img
            style={{ width: 100, height: 100 }}
            src={this.props.imageUrl}
            alt="Chup ker loru"
          />
        ) : null} */}
        {this.props.name && <h3 style={styles.name}>{this.props.name}</h3>}
        <h6 style={styles.designation}>{this.props.designation}</h6>
        <p style={styles.description}>{this.props.description}</p>
      </div>
    );
  }
}

const styles = {
  root: {
    backgroundColor: "darkblue",
    padding: "20px",
    marginLeft: 40,
    marginTop: 40,
    marginBottom: 40,
    marginRight: 40,
    width: 400,
  },
  name: {
    fontFamily: "Poppins",
    fontSize: 40,
    textAlign: "center",
    color: "white",
    textDecoration: "underline",
  },
  designation: {
    fontFamily: "Poppins",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight: 700,
  },
  description: {
    fontFamily: "Poppins",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
  },
};
export default ProfileCard;

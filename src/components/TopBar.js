import React, { Component } from "react";

class TopBar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.TopBar}>
        <p style={styles.TopBarText}>For Inquiries Call us at: 0213-3215678</p>
      </div>
    );
  }
}

const styles = {
  TopBar: {
    backgroundColor: "lightgray",
    height: "8%",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  TopBarText: {
    paddingTop: "0px",
    fontSize: "15px",
    fontFamily: "Poppins",
    padding: 3,
    marginLeft: "3%",
    textAlign: "center",
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
export default TopBar;

import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFinalVal: 0,
    };
  }

  inputChangeHandler = (input) => {
    console.log("Calculator -> inputChangeHandler -> input", input);
    this.setState({ inputFinalVal: input });
  };

  render() {
    return (
      <div style={styles.root}>
        <p>{this.props.name}</p>
        <table border="1">
          <tr>
            <td colspan="3">
              <input value={this.state.inputFinalVal} type="text" id="result" />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="1"
                onClick={this.inputChangeHandler.bind(this, "1")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="2"
                onClick={this.inputChangeHandler.bind(this, "2")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="3"
                onClick={this.inputChangeHandler.bind(this, "3")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="/"
                onClick={this.inputChangeHandler.bind(this, "/")}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="4"
                onClick={this.inputChangeHandler.bind(this, "4")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="5"
                onClick={this.inputChangeHandler.bind(this, "5")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="6"
                onClick={this.inputChangeHandler.bind(this, "6")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="-"
                onClick={this.inputChangeHandler.bind(this, "-")}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="7"
                onClick={this.inputChangeHandler.bind(this, "7")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="8"
                onClick={this.inputChangeHandler.bind(this, "8")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="9"
                onClick={this.inputChangeHandler.bind(this, "9")}
              />{" "}
            </td>
            <td>
              <input
                type="button"
                value="+"
                onClick={this.inputChangeHandler.bind(this, "+")}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="." onclick="dis('.')" />{" "}
            </td>
            <td>
              <input type="button" value="0" onclick="dis('0')" />{" "}
            </td>
            <td>
              <input type="button" value="=" onclick="solve()" />{" "}
            </td>
            <td>
              <input type="button" value="*" onclick="dis('*')" />{" "}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    // backgroundColor: "red",
    // width: 300,
    // height: 300,
  },

  text: {
    fontSize: "30px",
    color: "white",
  },
};
export default Calculator;

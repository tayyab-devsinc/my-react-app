import React, { Component } from "react";

export default class Calculator extends Component {
  render() {
    const element = 2 ** 5;
    return (
      <div>
        {element}
        {console.log("element: ", element)}
      </div>
    );
  }
}
import React, { Component } from "react";
import Hello from "./Hello";

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <button onClick={() => this.setState({ name: "Keven" })}>
          Je m'appelle Keven
        </button>
        <button onClick={() => this.setState({ name: "Dylan" })}>
          Je m'appelle Dylan
        </button>
      </div>
    );
  }
}

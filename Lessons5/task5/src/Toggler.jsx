import React, { Component } from "react";
import "./index.scss";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Off",
    };
  }
  // onButton(e) {
  //   if (e.target.textContent === "Off") {
  //     e.target.textContent = "On";
  //   } else if(e.target.textContent === "On") {
  //     e.target.textContent = "Off"
  //   }
  // }

  setButton() {
    this.setState({
      active: this.state.active ? 'On' : 'Off',
    })
  }

  render() {
    return (
      <div>
        <button className="toggler" onClick={() => this.setButton()}>{this.state.active}</button>
      </div>
    );
  }
}

export default Toggler;
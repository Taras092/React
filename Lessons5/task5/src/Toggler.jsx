import React, { Component } from "react";
import "./index.scss";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
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
      active: !this.state.active,
    })
  }

  render() {
    return (
      <div>
        <button className="toggler" onClick={() => this.setButton()}>{this.state.active ? 'On' : 'Off'}</button>
      </div>
    );
  }
}

export default Toggler;
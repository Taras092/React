import React, { Component } from "react";
import "./index.scss";

class Toggler extends Component {
  onButton(e) {
    if (e.target.textContent === "Off") {
      e.target.textContent = "On";
    } else if(e.target.textContent = "On") {
      e.target.textContent = "Off"
    }
  }

  render() {
    return (
      <div>
        <button className="toggler" onClick={this.onButton}>Off</button>
      </div>
    );
  }
}

export default Toggler;
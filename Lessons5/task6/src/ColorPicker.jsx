import React, { Component } from "react";
import "./index.scss";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "Red",
    };
  }

  onHover(color) {
    this.setState({
      currentColor: color,
    });
  }

  offHover() {
    this.setState({
      currentColor: null,
    })
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.currentColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onHover.bind(this, "Coral")}
            onMouseLeave={this.offHover.bind(this)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onHover.bind(this, "Aqua")}
            onMouseLeave={this.offHover.bind(this)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onHover.bind(this, "Bisque")}
            onMouseLeave={this.offHover.bind(this)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

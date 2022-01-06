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

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.currentColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onHover.bind(this, "Coral")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onHover.bind(this, "Aqua")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onHover.bind(this, "Bisque")}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

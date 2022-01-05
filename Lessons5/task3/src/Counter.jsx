import React from "react";
import "./index.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div class="counter">
        <button
          data-action="decrease"
          class="counter__button"
          onClick={this.decrease}
        >
          -
        </button>
        <span class="counter__value" onClick={() => this.reset()}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          class="counter__button"
          onClick={this.increase}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;

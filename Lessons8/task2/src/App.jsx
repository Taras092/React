import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div>
        <div className="time">
          {this.state.visible && <Clock location="New York" offset={-5} interval={1000} />}
          {this.state.visible && <Clock location="Kyiv" offset={2} interval={1000} />}
          {this.state.visible && <Clock location="London" offset={0} interval={1000} />}
        </div>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
      </div>
    );
  }
}

export default App;

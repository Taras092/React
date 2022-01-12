import React, { Component } from 'react';

class Dimension extends Component {
  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    };

    document.title = `${innerWidth} x ${innerHeight}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;

    this.setState({
      width: innerWidth,
      height: innerHeight,
    });

    document.title = `${innerWidth} x ${innerHeight}`;
  };
  render() {
    return <div class="dimensions">{`${this.state.width}px - ${this.state.height}`}</div>;
  }
}

export default Dimension;

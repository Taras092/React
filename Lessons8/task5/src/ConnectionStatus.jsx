import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
    };

    console.log(this.state.status);
  }

  componentDidMount() {
    window.addEventListener('ononline', this.onOnline);
    window.addEventListener('onoffline', this.ofOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('ononline', this.onOnline);
    window.removeEventListener('onoffline', this.ofOffline);
  }

  onOnline = e => {
    this.setState({
      status: e.target,
    });
    console.log(this.state.status);
  };

  ofOffline = e => {
    this.setState({
      status: e.target,
    });
    console.log(this.state.status);
  };

  render() {
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;

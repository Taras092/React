import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.onlineStatus);
    this.setStatus(navigator.onLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.onlineStatus);
  }

  onlineStatus = e => {
    this.setStatus(navigator.onLine);
  };

  setStatus = (online) => {
    this.setState({
      online,
    });
  };

  render() {
    const { online } = this.state;
    if (online) {
      return <div className="status ">online</div>;
    }
    return <div className="status status_offline">offline</div>;
  }
}

export default ConnectionStatus;


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
    console.log(navigator.onLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.onlineStatus);
  }

  onlineStatus = e => {
    console.log(e.navigator.onLine);
    this.setStatus(e.navigator.onLine);
  };

  setStatus = (online) => {
    this.setState({
      online,
    });
  };

  render() {
    const { online } = this.state;
    if (online) {
      return <div className="status ">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;

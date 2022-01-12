import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
      offline: null,
    };

    console.log(this.state);
  }

  componentDidMount() {
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.onlineStatus);
    const { ononline, onoffline } = window;
    this.setStatus(ononline, onoffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.onlineStatus);
  }

  onlineStatus = e => {
    const { ononline, onoffline } = e.target;

    this.setStatus(ononline, onoffline);
  };

  setStatus = (online, offline) => {
    this.setState({
      online,
      offline,
    });
  };

  render() {
    const { online, ofline } = this.state;
    if (online) {
      return <div className="status ">Online</div>;
    }
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;

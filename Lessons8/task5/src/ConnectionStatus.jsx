import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
      styleName: 'status',
      text: 'online',
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

  setStatus = online => {
    this.setState({
      online,
      styleName: online ? 'status' : 'status status_offline',
      text: online ? 'online' : 'offline',
    });
  };


  render() {
    const { styleName, text } = this.state;
    return <div className={styleName}>{text}</div>;
  }
}

export default ConnectionStatus;

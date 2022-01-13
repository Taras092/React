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
    window.addEventListener('online', this.setOnlineStatus);
    window.addEventListener('offline', this.setOfflineStatus);
    if (navigator.onLine) { 
      this.setOnlineStatus();
    } else {
      this.setOfflineStatus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnlineStatus);
    window.removeEventListener('offline', this.setOfflineStatus);
  }

  setOnlineStatus = () => {
    this.setState({
      online: true,
      styleName: 'status',
      text: 'online',
    });
  };

  setOfflineStatus = () => {
    this.setState({
      online: false,
      styleName: 'status status_offline',
      text: 'offline',
    });
  };

  render() {
    const { styleName, text } = this.state;
    return <div className={styleName}>{text}</div>;
  }
}

export default ConnectionStatus;

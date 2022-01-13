import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
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
    });
  };

  setOfflineStatus = () => {
    this.setState({
      online: false,
    });
  };

  render() {
    const { online } = this.state;
    if(online) {
      return <div className="status">online</div>;
    }
    return <div className="status status_offline">offline</div>;
  }
}

export default ConnectionStatus;

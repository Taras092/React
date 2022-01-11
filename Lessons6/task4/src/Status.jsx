import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: null,
    };
  }

  onlineStatus = () => {
    this.setState({
      isOnline: false,
    });
  };

  offlineStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {!this.state.isOnline ? (
          <Offline onClick={this.offlineStatus} />
          ) : (
          <Online onClick={this.onlineStatus} />
        )}
      </div>
    );
  }
}

export default Status;

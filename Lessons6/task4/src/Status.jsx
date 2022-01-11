import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
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
        {this.state.isOnline ? (
          <Online onClick={this.onlineStatus} />
        ) : (
          <Offline onClick={this.offlineStatus} />
        )}
      </div>
    );
  }
}

export default Status;

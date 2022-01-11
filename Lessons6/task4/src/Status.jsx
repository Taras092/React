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
      isOnline: true,
    });
  };

  offlineStatus = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline === false ? (
          <Offline onClick={this.onlineStatus} />
        ) : (
          <Online onClick={this.offlineStatus} />
        )}
      </div>
    );
  }
}

export default Status;

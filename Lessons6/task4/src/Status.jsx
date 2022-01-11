import React, { Component } from "react";
import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false
    }
  }

  onlineStatus = () => {
    this.setState({
      isOnline: true
    })
  }

  offlineStatus = () => {
    this.setState({
      isOnline: false
    })
  }
  
  render() {
    return (
      <div class="status">
        {this.state.isOnline ? (
          <Offline onClick={this.offlineStatus}/>
        )
      : (
        <Online onClick={this.onlineStatus}/>
      )}
      </div>
    );
  }
}

export default Status;

import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
  const { isOpen } = this.state;
  const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleContent}>
            {isOpen ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;

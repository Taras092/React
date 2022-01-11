import React from "react";

const Offline = (props) => {
  return (
    <>
      <span className="status__text" onClick={props.onClick}>Offline</span>
      <button className="status__btn" onClick={props.onClick}>Reconnect</button>
    </>
  );
};

export default Offline;
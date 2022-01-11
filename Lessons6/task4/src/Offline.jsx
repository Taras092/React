import React from "react";

const Offline = (props) => {
  return (
    <>
      <span class="status__text" onClick={props.onClick}>Offline</span>
      <button class="status__btn" onClick={props.onClick}>Reconnect</button>
    </>
  );
};

export default Offline;
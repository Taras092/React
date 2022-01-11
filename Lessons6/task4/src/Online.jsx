import React from "react";

const Online = (props) => {
  return (
    <>
      <span className="status__text" onClick={props.onClick}>All good!</span>
    </>
  );
};

export default Online;
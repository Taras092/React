import React from "react";
import "./index.scss";

const GoodButton = () => (
  <button
    className="fancy-button"
    onClick={() => {
      alert("Good job!");
    }}
  >
    Click me!
  </button>
);

export default GoodButton;

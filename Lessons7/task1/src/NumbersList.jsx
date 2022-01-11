import React from "react";

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num) => (
        <li key={num.toString()}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;

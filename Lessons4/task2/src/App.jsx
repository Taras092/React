import React from "react";
import Clock  from "./Clock";

const App = () => {
  return (
    <>
      <Clock location="New York" offset={-5} interval={1000}/>
      <Clock location="Kyiv" offset={2} interval={1000}/>
      <Clock location="London" offset={0} interval={1000}/>
    </>
  );
};

export default App;
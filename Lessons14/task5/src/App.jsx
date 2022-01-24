import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  // const [visible, setVisible] = useState(true);

  // const toggle = () => {
  //   setVisible(!visible)
  // }

  return (
    <div>
      {/* <div className="time">
        {visible && <Clock location="New York" offset={-5} interval={1000} />}
        {visible && <Clock location="Kyiv" offset={2} interval={1000} />}
        {visible && <Clock location="London" offset={0} interval={1000} />}
      </div>
      <button className="btn" onClick={toggle}>
        Toggle
      </button> */}
      <div className="time">
        <Clock location="New York" offset={-5} interval={1000} />
        <Clock location="Kyiv" offset={2} interval={1000} />
        <Clock location="London" offset={0} interval={1000} />
      </div>
    </div>
  );
}

export default App;

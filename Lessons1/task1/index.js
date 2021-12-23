import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector('#root');
// const greetingElement = document.createElement('div');
// greetingElement.classList.add('greeting');
// greetingElement.textContent = "Hello, React!";

// rootElement.append(greetingElement);

const greetingElement = React.createElement(
  'div',
  { className: 'greeting' },
  "Hello, React!"
);

ReactDOM.render(greetingElement, rootElement);
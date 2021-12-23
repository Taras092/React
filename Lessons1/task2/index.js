import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector('#root');

const element = React.createElement(
  'div',
  { class: 'greeting' },
  [
    React.createElement(
      'div',
      { class: 'greeting__title' },
      "Hello, world!"
      ),
      React.createElement(
        'div',
        { class: 'greeting__text' },
        "I\'m learning React"
        ),
  ]
);

ReactDOM.render(element, rootElement);
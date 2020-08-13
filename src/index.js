import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

const FunctionComponents = (props) => 
  React.createElement('h1', {id: 'hi'}, props.text);

const Element = React.createElement('p', null, "Paragraph");

class ClassComponents extends Component {
  render() {
    return React.createElement('div', {className: 'main'}, 
      React.createElement(FunctionComponents, {text: 'свойство текст'}), Element)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
  </React.StrictMode>,
  document.getElementById('root')
);

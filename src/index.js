import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

const FunctionComponents = () => 
  React.createElement('h1', null, 'Greetings!');

const Element = React.createElement('p', null, "Paragraph");

class ClassComponents extends Component {
  render() {
    return React.createElement('div', {className: 'main'}, 
      null, React.createElement(FunctionComponents), Element)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
  </React.StrictMode>,
  document.getElementById('root')
);

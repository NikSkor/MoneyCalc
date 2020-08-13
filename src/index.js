import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

const Header = (props) => <h1 id='hi'>{props.text}</h1>;

const Element = <p>Paragraph</p>;

class Main extends Component {
  render() {
    return(
      <div className='main'>
        <Header text={"свойство ТЕКСТ " + this.props.count}/>
        {Element}
      </div>
    ) 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main count={7}/>
  </React.StrictMode>,
  document.getElementById('root')
);

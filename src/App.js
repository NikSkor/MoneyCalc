import React from 'react';
import React, {Component} from 'react';
import Total from './components/total/Total.js';
import History from './components/history/History.js';
import Operation from './components/operation/Operation.js';

class App extends Component {
render(){
  return (
    <React.Fragment>
        <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
        </header>

        <main>
            <div className="container">
                <Total/>
                <History/>
                <Operation/>
            </div>
      </main>
    </React.Fragment>
  );
}
}

export default App;

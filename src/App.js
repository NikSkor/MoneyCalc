import React from 'react';
import {Component} from 'react';
import Total from './components/total/Total.js';
import History from './components/history/History.js';
import Operation from './components/operation/Operation.js';

class App extends Component {
/*   constructor(props){
    super(props);
    this.state = {  
    }
  } */
  state = {
    transactions: JSON.parse(localStorage.getItem('calcMoney1')) || [],
    description:'',
    amount:'',
    resultIncome: 0,
    resultExpenses: 0,
    totalBalance: 0
  }
  componentWillMount(){
    this.getTotalBalance();
  }
  componentDidUpdate(){
    this.addStorage();
  }
  addTransaction = add =>  {
    const transactions = [...this.state.transactions];

    const transaction = {
      id:`cmr${(+new Date()).toString(16)}`,
      description:this.state.description,
      amount:parseFloat(this.state.amount) || 0,
      add 
    }

    transactions.push(transaction)

    this.setState({
      transactions,
      description:'',
      amount:''
    },
    this.getTotalBalance);
  }

  addAmount = e => { //this указывает в этом случае на state класса
    this.setState({
      amount: e.target.value
    })
  }

  addDescription = e => { //this указывает в этом случае на state класса
    this.setState({
      description: e.target.value
    })
  }

  getIncome = () => {
    return this.state.transactions
      .filter(item=>item.add)
      .reduce((acc, item)=> item.amount + acc, 0)
  }

  getExpenses = () => {
    return this.state.transactions
      .filter(item=>!item.add)
      .reduce((acc, item)=> item.amount + acc, 0)
  }

  getTotalBalance = () => {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();

    const totalBalance = resultIncome - resultExpenses;

    this.setState({
      resultIncome,
      resultExpenses,
      totalBalance
    })
  }

  addStorage() {
    localStorage.setItem('calcMoney1', JSON.stringify(this.state.transactions))
  }

  delTransaction = key => {
    const transactions = this.state.transactions.filter(item => item.id !== key)
    this.setState({transactions}, this.getTotalBalance)
  }
  render(){
    return (
      <React.Fragment>
          <header>
              <h1>Кошелек</h1>
              <h2>Калькулятор расходов</h2>
          </header>

          <main>
              <div className="container">
                  <Total 
                    resultExpenses={this.state.resultExpenses}
                    resultIncome={this.state.resultIncome}
                    totalBalance={this.state.totalBalance}
                  />
                  <History 
                    transactions={this.state.transactions}
                    delTransaction={this.delTransaction}
                  />
                  <Operation 
                    addTransaction={this.addTransaction}
                    addAmount={this.addAmount}
                    addDescription={this.addDescription}
                    description={this.state.description}
                    amount={this.state.amount}
                  />
              </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

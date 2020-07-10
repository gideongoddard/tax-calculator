import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Results from '../Results/Results';
import Tax from '../../util/Tax';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      scotland: 'no',
      income: '',
      incomeTax: ''
    }

    this.updateScotland = this.updateScotland.bind(this);
    this.updateIncome = this.updateIncome.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateScotland(status) {
    this.setState({
        scotland: status
    })
  }

  updateIncome(income) {
    this.setState({
        income: income
    })
  }

  submitForm() {
    let incomeTax = Tax.calculateTax(this.state.scotland, this.state.income);
    this.setState({
      formSubmitted: true,
      incomeTax: incomeTax
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form scotland={this.state.scotland} onScotlandChange={this.updateScotland} income={this.state.income} onIncomeChange={this.updateIncome} formSubmitted={this.state.formSubmitted} onFormSubmit={this.submitForm} />
        <Results formSubmitted={this.state.formSubmitted} />
      </div>
    );
  }
}

export default App;

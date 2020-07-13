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
      scotland: false,
      income: '',
      incomeTax: 0,
      taxBreakdown: {
        personalAllowanceAmount: 0,
        personalAllowanceTax: 0,
        basicAmount: 0,
        basicTax: 0,
        higherAmount: 0,
        higherTax: 0,
        additionalAmount: 0,
        additionalTax: 0,
        totalIncome: 0,
        totalTax: 0,
        scotPersonalAllowanceAmount: 0,
        scotPersonalAllowanceTax: 0,
        scotStarterAmount: 0,
        scotStarterTax: 0,
        scotBasicAmount: 0,
        scotBasicTax: 0,
        scotIntermediateAmount: 0,
        scotIntermediateTax: 0,
        scotHigherAmount: 0,
        scotHigherTax: 0,
        scotTopAmount: 0,
        scotTopTax: 0,
        scotTotalIncome: 0,
        scotTotalTax: 0
      }
    }

    this.updateScotland = this.updateScotland.bind(this);
    this.updateIncome = this.updateIncome.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }

  updateScotland(status) {
    if (status === 'yes') {
      this.setState({
        scotland: true
    })
    } else {
      this.setState({
        scotland: false
      })
    }
  }

  updateIncome(income) {
    this.setState({
        income: income
    })
  }

  submitForm() {
    let incomeTax = Tax.calculateTax(this.state.scotland, this.state.income);
    if (this.state.scotland === false) {
      this.setState({
        formSubmitted: true,
        incomeTax: incomeTax.totalTax,
        taxBreakdown: incomeTax
      })
    } else if (this.state.scotland === true) {
      this.setState({
        formSubmitted: true,
        incomeTax: incomeTax.scotTotalTax,
        taxBreakdown: incomeTax
      })
    } else {
      this.setState({
        formSubmitted: true
      })
    }
  }

  resetApp() {
    this.setState({
      formSubmitted: false,
      scotland: false,
      income: '',
      incomeTax: 0,
      taxBreakdown: {
        personalAllowanceAmount: 0,
        personalAllowanceTax: 0,
        basicAmount: 0,
        basicTax: 0,
        higherAmount: 0,
        higherTax: 0,
        additionalAmount: 0,
        additionalTax: 0,
        totalIncome: 0,
        totalTax: 0,
        scotPersonalAllowanceAmount: 0,
        scotPersonalAllowanceTax: 0,
        scotStarterAmount: 0,
        scotStarterTax: 0,
        scotBasicAmount: 0,
        scotBasicTax: 0,
        scotIntermediateAmount: 0,
        scotIntermediateTax: 0,
        scotHigherAmount: 0,
        scotHigherTax: 0,
        scotTopAmount: 0,
        scotTopTax: 0,
        scotTotalIncome: 0,
        scotTotalTax: 0
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form scotland={this.state.scotland} onScotlandChange={this.updateScotland} income={this.state.income} onIncomeChange={this.updateIncome} formSubmitted={this.state.formSubmitted} onFormSubmit={this.submitForm} />
        <Results formSubmitted={this.state.formSubmitted} income={this.state.income} incomeTax={this.state.incomeTax} taxBreakdown={this.state.taxBreakdown} scotland={this.state.scotland} onReset={this.resetApp} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './Form.css';
import Country from '../Country/Country';
import Income from '../Income/Income';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scotland: 'no',
            income: '',
        }

        this.updateScotland = this.updateScotland.bind(this);
        this.updateIncome = this.updateIncome.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        this.props.onFormSubmit(true);
        e.preventDefault();
    }

    render() {
        return (
            <form style={{ display: this.props.formSubmitted ? 'none' : 'flex' }} onSubmit={this.handleSubmit}>
                <Country scotland={this.state.scotland} onScotlandChange={this.updateScotland} />
                <div className="separator"></div>
                <Income income={this.state.income} onIncomeChange={this.updateIncome} />
                <div className="separator"></div>
                <input type="submit" value="Submit" className="submit"></input>
            </form>
        )
    }
}

export default Form;
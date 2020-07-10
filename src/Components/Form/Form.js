import React from 'react';
import './Form.css';
import Country from '../Country/Country';
import Income from '../Income/Income';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleScotlandChange = this.handleScotlandChange.bind(this);
        this.handleIncomeChange = this.handleIncomeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleScotlandChange(status) {
        this.props.onScotlandChange(status);
    }

    handleIncomeChange(income) {
        this.props.onIncomeChange(income);
    }

    handleSubmit(e) {
        this.props.onFormSubmit(true);
        e.preventDefault();
    }

    render() {
        return (
            <form style={{ display: this.props.formSubmitted ? 'none' : 'flex' }} onSubmit={this.handleSubmit}>
                <Country scotland={this.props.scotland} onChange={this.handleScotlandChange} />
                <div className="separator"></div>
                <Income income={this.props.income} onChange={this.handleIncomeChange} />
                <div className="separator"></div>
                <input type="submit" value="Submit" className="submit"></input>
            </form>
        )
    }
}

export default Form;
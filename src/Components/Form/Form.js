import React from 'react';
import './Form.css';
import ContentBox from '../ContentBox/ContentBox'
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
            <div className="content-box" style={{ display: this.props.formSubmitted ? 'none' : 'flex' }}>
                <form onSubmit={this.handleSubmit}>
                    <Country scotland={this.props.scotland} onChange={this.handleScotlandChange} />
                    <Income income={this.props.income} onChange={this.handleIncomeChange} />
                    <input type="submit" value="Submit" className="submit"></input>
                </form>
            </div>
        )
    }
}

export default Form;
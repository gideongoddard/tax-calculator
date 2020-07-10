import React from 'react';
import './Results.css';

class Results extends React.Component {
    render() {
        return (
            <div style={{ display: this.props.formSubmitted ? 'flex' : 'none' }} className="results">
                <h3>Your results</h3>
                <p>On your salary of £{this.props.income}, your income tax due will be:</p>
                <div className="main-result">£{this.props.incomeTax}</div>
            </div>
        )
    }
}

export default Results;
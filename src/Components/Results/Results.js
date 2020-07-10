import React from 'react';
import './Results.css';

class Results extends React.Component {
    render() {
        return (
            <div style={{ display: this.props.formSubmitted ? 'flex' : 'none' }} className="results">
                <p>On your salary of £X, your income tax due will be: £Y</p>
            </div>
        )
    }
}

export default Results;
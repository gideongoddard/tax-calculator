import React from 'react';
import './Income.css';

class Income extends React.Component {
   constructor(props) {
       super(props);
       this.handleUserInput = this.handleUserInput.bind(this);
   }

   handleUserInput(e) {
       this.props.onIncomeChange(e.target.value);
   }
    
    render() {
        return (
            <div className="income-field">
                <h3>What is your annual income (£)?</h3>
                <input type="number" id="income" name="income" min="0" onChange={this.handleUserInput} value={this.props.income}></input>
            </div>
        )
    }
}

export default Income;
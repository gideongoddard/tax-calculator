import React from 'react';
import './Country.css';

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoice: 'no',
        }

        this.handleUserChoice = this.handleUserChoice.bind(this);
    }

    handleUserChoice(e) {
        this.setState({
            userChoice: e.target.value,
        })
    }
    
    render() {
        return (
            <div className="country-field">
                <h3>Do you live in Scotland?</h3>
                <p>Income tax bands are different in Scotland than the rest of the UK</p>
                <div className="radio">
                    <span>
                        <input type="radio" id="yes" name="yes" onChange={this.handleUserChoice} value="yes" checked={this.state.userChoice === "yes"} />
                        <label htmlFor="yes">Yes</label>
                    </span>
                    <span>
                        <input type="radio" id="no" name="no" onChange={this.handleUserChoice} value="no" checked={this.state.userChoice === "no"} />
                        <label htmlFor="no">No</label>
                    </span>
                </div>
            </div>
        )
    }
}

export default Country;
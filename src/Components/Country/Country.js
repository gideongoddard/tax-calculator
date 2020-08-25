import React from 'react';
import './Country.css';

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserChoice = this.handleUserChoice.bind(this);
    }

    handleUserChoice(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
            <div className="country-field">
                <h3>Do you live in Scotland?</h3>
                <div className="radio">
                    <span>
                        <input type="radio" id="yes" name="yes" onChange={this.handleUserChoice} value="yes" checked={this.props.scotland === true} />
                        <label htmlFor="yes">Yes</label>
                    </span>
                    <span>
                        <input type="radio" id="no" name="no" onChange={this.handleUserChoice} value="no" checked={this.props.scotland === false} />
                        <label htmlFor="no">No</label>
                    </span>
                </div>
                <em>Income tax bands are different in Scotland than the rest of the UK</em>
            </div>
        )
    }
}

export default Country;
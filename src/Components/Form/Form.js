import React from 'react';
import './Form.css';
import Country from '../Country/Country';
import Income from '../Income/Income';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Country />
                <div className="separator"></div>
                <Income />
                <div className="separator"></div>
                <input type="submit" value="Submit" className="submit"></input>
            </form>
        )
    }
}

export default Form;
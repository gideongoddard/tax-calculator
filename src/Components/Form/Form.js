import React from 'react';
import './Form.css';
import Country from '../Country/Country';
import Income from '../Income/Income';
import Submit from '../Submit/Submit';

class Form extends React.Component {
    render() {
        return (
            <form>
                <Country />
                <div className="separator"></div>
                <Income />
                <div className="separator"></div>
                <Submit />
            </form>
        )
    }
}

export default Form;
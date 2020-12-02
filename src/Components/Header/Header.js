import React from 'react';
import './Header.css';
import Icon from "./tax-calc-icon.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.text}</h1>
                <img src={Icon} alt="Pound sign icon" width="100%"/>
            </header>
        )
    }
}

export default Header;
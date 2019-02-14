import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: 'red'
        };
        this.toggleBackground = this.toggleBackground.bind(this);
    }

    toggleBackground () {
        if (this.state.class === 'red') {
            this.setState({class: 'purple'});
        } else {
            this.setState({class: 'red'});
        }
    }

    render () {
        return (
            <header className={this.state.class}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#">Products</a></li>
                </ul>
                <button onClick={this.toggleBackground}>Toggle Background</button>
            </header>
        );
    }
}

export default Header;

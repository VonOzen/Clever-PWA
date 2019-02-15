import React, { Component } from 'react';
import './Header.scss';
import Nav from '../Nav/Nav'

class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {
            class: 'red'
        };
        this.toggleBackground = this.toggleBackground.bind(this);
    }

    toggleBackground () {
        this.state.class === 'red'
        ? this.setState({class: 'purple'})
        : this.setState({class: 'red'});
    }

    render () {
        return (
            <header className={this.state.class}>
                <Nav test="test" />
                <button onClick={this.toggleBackground}>Toggle Background</button>
            </header>
        );
    }
}

export default Header;

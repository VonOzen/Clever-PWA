import React, { Component } from 'react';
import './Header.scss';
import Nav from '../Nav/Nav'

class Header extends Component {

    constructor () {
        super();
    }

    toggleBackground () {

    }

    render () {
        return (
            <header className="">
                <Nav />
            </header>
        );
    }
}

export default Header;

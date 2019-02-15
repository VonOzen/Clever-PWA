import React from 'react';

const Nav = () => {

    const links = [
        { 'label': 'Home', 'target': '#'},
        { 'label': 'Products', 'target': '#'},
    ];

    const listLinks = links.map((link) => {
        return (
            <li><a href={link.target}>{link.label}</a></li>
        );
    });

    return (
        <nav>
            <ul>
                {listLinks}
            </ul>
        </nav>
    );
}

export default Nav;

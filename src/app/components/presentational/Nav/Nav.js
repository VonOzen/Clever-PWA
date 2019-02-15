import React from 'react';

export const Nav = () => {

    const links = [
        { 'label': 'Home', 'target': '#'},
        { 'label': 'Products', 'target': '#'},
    ];

    const listLinks = links.map((link) => {
        return (
            <li key={link.label}><a href={link.target}>{link.label}</a></li>
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

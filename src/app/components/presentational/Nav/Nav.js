import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.scss';


const Nav = () => {

  const links = [
    {target:'/products', label:'Catalogue'},
    {target:'/contact', label:'Contact'},
  ];

  const linksList = links.map((link) => {
    return <li key={link.label}><NavLink to={link.target} activeClassName="active">{link.label}</NavLink></li>;
  });
  return (
    <nav>
      <Link to="/"><img src="http://placehold.it/170x70" alt="logo" /></Link>
      <ul>
        {linksList}
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import './nav.scss';


const Nav = () => {

  const links = [
    {target:'/catalog', label:'Catalogue'},
    {target:'/contact', label:'Contact'},
  ];

  const linksList = links.map((link) => {
    return <li key={link.label}><a href="{link.target}">{link.label}</a></li>;
  });
  return (
    <nav>
      <img src="http://placehold.it/170x70"/>
      <ul>
        {linksList}
      </ul>
    </nav>
  );
};

export default Nav;

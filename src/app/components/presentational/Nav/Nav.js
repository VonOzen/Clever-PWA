import React from 'react';
import './nav.scss';


const Nav = () => {

  const links = [
    {target:'/catalog', label:'Catalogue'},
    {target:'/contact', label:'Contact'},
  ];

  const linksList = links.map((link) => {
<<<<<<< HEAD
    return <li key={link.label}><a href="{link.target}">{link.label}</a></li>;
=======
    return <li key={link.label}><a href={link.target}>{link.label}</a></li>;
>>>>>>> created styleguide
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

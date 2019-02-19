import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Nav from '../Nav/Nav';
import './header.scss';


const Header = () => {
  return (
    <header>
      <Wrapper>
        <Nav />
      </Wrapper>
    </header>
  );
};

export default Header;

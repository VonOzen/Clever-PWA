import React from 'react';
import Nav from '../Nav/Nav';
import './header.scss';
import Wrapper from '../Wrapper/Wrapper';


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
import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './main.scss';

const Main = (props) => {
  return (
    <main>
      <Wrapper>
        {props.children}
      </Wrapper>
    </main>
  );
};

export default Main;

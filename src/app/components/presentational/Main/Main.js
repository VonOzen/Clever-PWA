import React from 'react';
import './main.scss';
import Wrapper from '../Wrapper/Wrapper';

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

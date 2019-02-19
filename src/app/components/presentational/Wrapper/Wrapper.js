import React from 'react';
import Nav from '../Nav/Nav';
import './wrapper.scss';


const Wrapper = (props) => {
  return (
    <div className="wrapper">
      {props.children}
    </div>
  );
};

export default Wrapper;

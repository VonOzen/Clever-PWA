import React from 'react';
import './main.scss';
import ProductsPage from '../../container/ProductsPage/ProductsPage';
import Wrapper from '../Wrapper/Wrapper';

const Main = () => {
  return (
    <main>
      <Wrapper>
        <ProductsPage />
      </Wrapper>
    </main>
  );
};

export default Main;

import React from 'react';
import './main.scss';
//import ProductsPage from '../../container/ProductsPage/ProductsPage';
import ProductPage from '../../container/ProductPage/ProductPage';
import Wrapper from '../Wrapper/Wrapper';

const Main = () => {
  return (
    <main>
      <Wrapper>
        <ProductPage />
      </Wrapper>
    </main>
  );
};

export default Main;

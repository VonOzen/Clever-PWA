import React, { Component } from 'react';
import Gallery from '../../presentational/Gallery/Gallery';
import ProductInfo from '../../presentational/ProductInfo/ProductInfo';
import './productpage.scss';

class ProductPage extends Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return (
      <article >
        <Gallery />
        <ProductInfo
          title="TV Phillips 4H UHD 4567ZU 80 pouces"
          stock="En stock"
          sku="RGU78O" 
          price="499,99"         
        />
      </article>
    );
  }
}

export default ProductPage;
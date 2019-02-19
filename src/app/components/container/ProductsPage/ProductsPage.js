import React, { Component } from 'react';
import Product from '../../presentational/Product/Product';
import './productsPage.scss';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsPerPage: [
        { name: 'Nintendo Switch', price: 300 },
        { name: 'Nintendo Wii', price: 150 },
        { name: 'Nintendo Wii U', price: 200 },
        { name: 'Nintendo 64', price: 100 },
        { name: 'Nintendo NES', price: 80 },
        { name: 'Nintendo SNES', price: 90 },
        { name: 'Nintendo Gamecube', price: 110 },
        { name: 'Nintendo Gameboy', price: 50 },
        { name: 'Nintendo Gameboy Advance', price: 55 },
        { name: 'Nintendo DS', price: 75 },
        { name: 'Nintendo 3DS', price: 95 },
        { name: 'Nintendo 3DSXL', price: 120 },
      ]
    };
  }

  listProducts() {
    return this.state.productsPerPage.map((product) => {
      return <Product name={product.name}
        price={product.price}
        key={product.name}
      />;
    });
  }

  render() {
    return (
      <div className="products-gallery">
        {this.listProducts()}
      </div>
    );
  }
}

export default ProductsPage;

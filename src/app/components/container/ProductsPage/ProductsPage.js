import React, { Component } from 'react';
import Product from '../../presentational/Product/Product';
import './productsPage.scss';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productsPerPage: []
      /*productsPerPage: [
        { name: 'Nintendo Switch', price: 300, sku: 111 },
        { name: 'Nintendo Wii', price: 150, sku: 112 },
        { name: 'Nintendo Wii U', price: 200, sku: 113 },
        { name: 'Nintendo 64', price: 100, sku: 114 },
        { name: 'Nintendo NES', price: 80, sku: 115 },
        { name: 'Nintendo SNES', price: 90, sku: 116 },
        { name: 'Nintendo Gamecube', price: 110, sku: 117 },
        { name: 'Nintendo Gameboy', price: 50, sku: 118 },
        { name: 'Nintendo Gameboy Advance', price: 55, sku: 119 },
        { name: 'Nintendo DS', price: 75, sku: 120 },
        { name: 'Nintendo 3DS', price: 95, sku: 121 },
        { name: 'Nintendo 3DSXL', price: 120, sku: 122 },
      ]*/
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
    .then((resp) => resp.json())
    .then((data) => {
        this.setState({productsPerPage: data});
        console.log(this.state);
        return this.state;
    });
  }

  listProducts() {
    return this.state.productsPerPage.map((product) => {
      return <Product name={product.text}
        price={product.price_collection[0].fr_FR}
        key={product.sku}
        sku={product.sku}
        id={product.id}
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

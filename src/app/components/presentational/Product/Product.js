import React, { Component } from 'react';
import './product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Product">
        <img src="http://placehold.it/200x200" alt={this.props.name + 'image'} />
        <h3>{this.props.name}</h3>
        <p>{this.props.price + '€'}</p>
      </div>
    );
  }
}

export default Product;

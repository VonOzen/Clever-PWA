import React, { Component } from 'react';
import './product.scss';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Product">
        <img src="http://placehold.it/324x200" alt={this.props.name + 'image'} />
        <div>
          <h3><Link to={`/products/${this.props.id}`}>{this.props.name}</Link></h3>
          <p>{this.props.price + '€'}</p>
        </div>
      </div>
    );
  }
}

export default Product;

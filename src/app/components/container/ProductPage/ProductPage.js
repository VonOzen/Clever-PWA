import React, { Component } from 'react';
import Gallery from '../../presentational/Gallery/Gallery';
import ProductInfo from '../../presentational/ProductInfo/ProductInfo';
import './productpage.scss';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product: []
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch('http://localhost:3000/products/' + id)
    .then((resp) => resp.json())
    .then((data) => {
         this.setState({product: data});
         console.log(data)
         return this.state;
    })
  }

  render() {
    return (
      <article >
        <Gallery />
        <ProductInfo
          title={this.state.product.text}
          stock={this.state.product.boolean ? 'En stock' : 'Epuisé'}
          sku={this.state.product.sku}
          description={this.state.product.textarea}
        />
      </article>
    );
  }
}

export default ProductPage;

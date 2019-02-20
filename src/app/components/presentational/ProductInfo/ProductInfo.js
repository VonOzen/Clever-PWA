import React from 'react';

const ProductInfo = (props) => {

  return (
    <div className="zoneInfosProduct">
      <h1>{props.title}</h1>
      <p className="">{props.stock}</p>
      <p>Réf: {props.sku}</p>
      <p className="price">{props.price}€</p>
      <hr align="left"/>
      <p>{props.description}</p>

    </div>
  );
}

export default ProductInfo;

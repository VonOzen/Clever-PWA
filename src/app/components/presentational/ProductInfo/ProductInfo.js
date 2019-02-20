import React from 'react';

const ProductInfo = (props) => {

  return (
    <div className="zoneInfosProduct">
      <h1>{props.title}</h1>
      <p className="">{props.stock}</p>
      <p>Réf: {props.sku}</p>
      <p className="price">{props.price}€</p>
      <hr align="left"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque enim eligendi deleniti at expedita iste quo, impedit architecto necessitatibus veritatis, nesciunt eius qui ea voluptas commodi molestiae similique aliquid?</p>
      
    </div>
  );
}

export default ProductInfo;
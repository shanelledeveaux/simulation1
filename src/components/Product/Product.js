import React from 'react';


const Product = props => {
    return (
    <div> 
        Product
        <img src={props.url} />
        <p>{props.productname}</p>
        <p>{props.price}</p>
        {console.log(props)}
    </div>)
  };

export default Product;
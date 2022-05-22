import React from 'react';
import './Product.css'

const Product = ({product}) => {
const{name,img,description,price,quantity}=product;

 return (

<div className=' ml-5 mr-5'>

 <div class="card w-25 bg-base-100 shadow-xl">
  <figure><img className='w-50 igm' src={img} alt="products" /></figure>
  <div className='card-body'>
    <h2 className="card-title">{name}</h2>
    <h2 > <span className=' font-bold'> Price: </span>{price} Taka</h2>
    <h2> <span className=' font-bold'> Quantity: </span> {quantity}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
 </div>

);
};

export default Product;
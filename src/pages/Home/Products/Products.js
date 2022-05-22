import React, { useEffect, useState }  from 'react';
import Product from '../Product/Product';



const Products = () => {
const [products,setProducts]=useState([]);
useEffect(()=>{
 fetch('products.json')
.then(res=>res.json())
.then(data=>setProducts(data))},[])


  return (
<div className='mb-5'>
        <div className="row">
        <h1 className='text-primary text-center mt-5 mb-4 text-4xl font-bold'> Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
            products.map(product => <Product
                key={product.id}
                product={product}
            >
            </Product>)
        }
        </div>
        </div>
    </div>
 );
};

export default Products;
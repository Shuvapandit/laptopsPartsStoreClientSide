import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css'
const Banner = () =>{                   
return (
<div className="hero min-h-screen hro" >
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white ">Hello There</h1>
      <p className="mb-5 font-bold text-2xl text-white">The Leading Online Computer parts Shop in Bangladesh.</p>
      
      <Link className="btn btn-primary" to="/login">LogIn</Link>
    </div>
  </div>
</div>
);
};
{/* <Link className='text-primary' to="/login"></Link></small></p> */}
export default Banner;
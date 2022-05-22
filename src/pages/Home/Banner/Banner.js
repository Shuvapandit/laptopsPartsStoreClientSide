import React from 'react';

import './Banner.css'
const Banner = () =>{                   
return (
<div class="hero min-h-screen hro" >
  <div class="hero-overlay bg-opacity-50"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold text-white ">Hello There</h1>
      <p class="mb-5 font-bold text-2xl text-white">The Leading Online Computer parts Shop in Bangladesh.</p>
      <button class="btn btn-primary">LogIn</button>
    </div>
  </div>
</div>
);
};

export default Banner;
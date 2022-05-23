import React from 'react';
import Banner from '../Banner/Banner';
import Business_Summary from '../BusinessSummary/Business_Summary';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';

const Home = () => { 
return (
<div>
<Banner></Banner> 
<Products></Products> 
<Business_Summary></Business_Summary>  
<Discount></Discount>                                                   
</div>
);
};

export default Home;
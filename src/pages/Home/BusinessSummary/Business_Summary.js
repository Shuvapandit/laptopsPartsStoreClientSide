import React from 'react';
import img1 from '../../../../src/images/icons/flags.png'
import img2 from '../../../../src/images/icons/delivery-bike.png'
import img3 from '../../../../src/images/icons/costumer.png'
import img4 from '../../../../src/images/icons/rating.png'
import './Business_Summary.css'

const Business_Summary = () => {
return (
<div>
      <h1 className='text-center mb-4 mt-4 font-bold text-4xl text-primary uppercase' >Millions Business Trust Us.</h1>           
      <p className='text-center text-2xl uppercase'>Try To understand user Expectation </p>   
      <div className='justify-center'>

  <div className='container ml-16 mt-5 mb-3'>
                      
<div className="  grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center  icn">
<div className='justify-center'>
<img className='' src={img1}/>
<p className='text-3xl font-bold'>72+</p>
<p className='text-3xl font-bold'>Countries</p>

</div>
<div>
<img src={img2}/> 
<p className='text-3xl font-bold'>4k+</p>
<p className='text-3xl font-bold'>Successful Delivery </p>                 
</div>
<div>
<img src={img3}/>   
<p className='text-3xl font-bold'>3k+</p>
<p className='text-3xl font-bold'>Happy Client </p>             
</div>
  
<div>
<img src={img4}/> 
<p className='text-3xl font-bold'>3k+</p>
<p className='text-3xl font-bold'>Feedbacks </p>                  
</div>
</div>
</div> 
</div>                                         
</div>
);
};

export default Business_Summary;
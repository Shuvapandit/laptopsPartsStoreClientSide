import React from 'react';
import intel from '../../../../images/icons/intel.png';
import lenovo from '../../../../images/icons/lenovo.png';
import samsung from '../../../../images/icons/samsung.png';
import acer from '../../../../images/icons/acer.png';
import canon from '../../../../images/icons/canon.png';
import asus from '../../../../images/icons/asus.png';

import './Brand.css'


const Brand = () => {
return (
<div>
<p className="text-3xl text-primary font-semibold mb-3 ml-2">Available Brands</p>
<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 ml-20 mb-6">
  <div>
  <img src={intel}/>
  </div>
  <div>
<img src={samsung}/>
  </div>
  <div>
  <img src={lenovo}/>
  </div>
  <div>
  <img src={acer}/>
  </div>
  <div>
 
  <img src={asus}/>
 
  </div>
  <div>
  <img src={canon}/>
  </div>
</div>          
 </div>
);
};

export default Brand;
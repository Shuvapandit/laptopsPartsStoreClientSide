import React from 'react';
import myphoto from '../../images/profile/7O9A8642.jpg'

const MyPortfolio = () => {
 return (
<div className='ml-12 mt-4 mr-4'>
<div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={myphoto}/>
    
  </div>
</div>   
<p className='text-2xl font-semibold'>Shuva Chakraborty.</p>                                                
<p > <span className='font-semibold'>Email:</span >chakrabortyshuva216@gmail.com</p>  
<p><span className='font-semibold text-2xl'>Education <br></br></span>
<span className='font-semibold '>Graduation </span> <br></br>
Bangladesh University OF Business And
Technology (BUBT)<br></br>(02/2018 - 03/2022),<br></br>Dhaka,Bangladesh.<br></br>
<span className='font-semibold'>Educational Qualification :</span> <br></br>
BSc. in Computer Science
And Engineering. <br></br>
<span className='font-semibold '>Higher Secondary</span><br></br>

Hajigonj Model Govt College <br></br>
06/2016 - 05/2016, <br></br>
Cumilla,Chottogram,Bangladesh<br></br>
<span className='font-semibold'>Courses</span><br></br>
<span className='font-semibold'>Higher Secondary</span><br></br>
Certificate, Science, GPA:
4.50/5.00<br></br>
<span className='font-semibold'>Secondary</span><br></br>
Chhota Sundar A Ali High School <br></br>
01/2009 - 02/2014, <br></br>
Cumilla,Chottogram,Bangladesh<br></br>
<span className='font-semibold'>Courses</span><br></br>
<span className='font-semibold'>Secondary School</span><br></br>
Certificate, Science, GPA:
4.88/5.00
</p>  
<p className='font-semibold text-2xl'>PERSONAL PROJECTS</p>
<a href="https://go-grocery-auth.web.app/"> Grocery shop.</a> <br></br>
<a href="https://movies-re-view.netlify.app/">Movies Review.</a><br></br>
<a href="">Coming Soon!</a> <br></br>
<div class="flex gap-1 my-1 w-full">
  <kbd class="kbd">C</kbd>
  <kbd class="kbd">C++</kbd>
  <kbd class="kbd">html</kbd>
  <kbd class="kbd">css</kbd>
  <kbd class="kbd">javaScript</kbd>
  <kbd class="kbd">BootStrap</kbd>
  <kbd class="kbd">Tailwind</kbd>
  
</div> 
<div class="flex mb-5  gap-1 my-1 w-full">
  <kbd class="kbd">Oracle Database</kbd>
  <kbd class="kbd">ReactJs</kbd>
  <kbd class="kbd">mongodb</kbd>
  <kbd class="kbd">express js</kbd>
  <kbd class="kbd">nodejs</kbd>
  <kbd class="kbd">firebase</kbd>
  
 
  
</div> 


                                         
</div>
);
};

export default MyPortfolio;
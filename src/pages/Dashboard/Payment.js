import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
const { id } = useParams();

            
               
return (
 <div>
<h2 className='text-center text-2xl'>Please pay for:<span className='text-primary text-bold'>{id}</span></h2>
 </div>
);
};

export default Payment;
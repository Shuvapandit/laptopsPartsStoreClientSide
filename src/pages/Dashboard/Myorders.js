import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myorders = () => {
const [purchase,setPurchase]=useState([]);
const [user] = useAuthState(auth);
useEffect(() => {
 if (user){
 fetch(`https://calm-shore-44429.herokuapp.com/purchase?customer=${user.email}`,{
method: 'GET',
headers: {
'authorization': `Bearer ${localStorage.getItem('accessToken')}`
}
 })
 .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        Navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setPurchase(data);
                });
        }
    }, [user])
          
        return (
 <div>
                 
 <h2 className='text-center text-2xl'>Total orders:{purchase.length}</h2> 
 <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>price</th>
                            <th>Email</th>
                            <th>Coustomer Phone No.</th>
                            <th>Coustomer Name</th>
                            <th>Payment</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchase.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.tool}</td>
                                <td>{a.price}</td>
                                <td>{a.customer}</td>
                                <td>{a.phone}</td>
                                <td>{a.customerName}</td> 
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-primary'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>

 </div>
);
};

export default Myorders;
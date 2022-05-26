import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
                 const { partsID } = useParams()
                    
        const [product, setProductDetail] = useState({})
         const [user, loading, error] = useAuthState(auth);
                
          useEffect(() => {
             const url = `http://calm-shore-44429.herokuapp.com/partsstore/${partsID}`
            fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))
                    }, [product])
                    const { _id, name, price } = product;
                
                    const handleSubmit = event => {
                        event.preventDefault();
                        const phone = event.target.phone.value;
                
                        const address = event.target.address.value;
                        const newQuantity = event.target.newQuantity.value;
                
                        console.log(_id, name, phone, address, newQuantity);
                
                        const purchase = {
                            purchaseID: _id,
                            tool: name,
                            phone: phone,
                            address: address,
                            price: price,
                            quantity: newQuantity,
                            customer: user.email,
                            customerName: user.displayName,
                        }
                
                        fetch('http://calm-shore-44429.herokuapp.com/purchase', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(purchase)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                               
                            })
                    }
                
                    return (
                        <div className='grid items-center justify-center'>
                            <div class="card w-full shadow-xl">
                                <div class="card-body  items-center">
                                    <h2 class="card-title">You are purchasing: {name}</h2>
                                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5'>
                                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                                        <input type="text" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                                        <input type="text" name='phone' placeholder="Enter your phone number" class="input input-bordered w-full max-w-xs" />
                                        <input type="text" name='address' placeholder="Enter Your address" class="input input-bordered w-full max-w-xs" />
                                        <input type="number" name='newQuantity' placeholder="Enter quantity" class="input input-bordered w-full max-w-xs" />
                                        <input type="submit" value={'submit'} class="btn btn-primary w-full max-w-xs" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    );
                };

export default Purchase;
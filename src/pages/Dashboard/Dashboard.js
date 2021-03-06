import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';



const Dashboard = () => {
    const [user] = useAuthState(auth);
   
    
    return (
     <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
      <h2 className='text-2xl font-bold text-center text-blue-500'>Welcome to your Dashboard</h2>
      <Outlet></Outlet>
      </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-45 bg-base-200 text-base-content">
                   
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add A Review</Link></li>
                    <li><Link to="/dashboard/history">My Profile</Link></li>
                    <li><Link to="/dashboard/alluser">All User</Link></li>
                
                     
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
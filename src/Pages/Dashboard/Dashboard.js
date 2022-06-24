import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='my-8'>
      <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
     {/* Page content here  */}
    <Outlet />
  </div> 
  <div class="drawer-side mr-10">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content rounded-lg shadow-lg">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/dashboard/review'>Review</Link></li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Dashboard;
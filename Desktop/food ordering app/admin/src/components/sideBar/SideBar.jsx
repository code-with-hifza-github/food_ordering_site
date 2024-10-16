import React from 'react'
import './SideBar.css';
import assets from '../../assets/assets';
import { NavLink } from 'react-router-dom';



const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">

        <NavLink to='/additem' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to='/listitem' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>

        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default SideBar

import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import logo from "../../images/header/logo.png";

const Navbar = () => {

  
    const[isScrolled, SetIsScrolled] = useState(false);

// Cuando se scrollea la página, si el PageYOffset es 0 (o sea, está todo arriba, da como resultado "false")

window.onscroll = () =>{
    SetIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
};




  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar" }>
      
      <div className='containernavbar'>
        
        <div className='left'>
          <img src={logo} alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>

        <div className='right'>
          < SearchIcon className='icon' />
          <span>KIDS</span>
          <NotificationsIcon className='icon' />
          <img src='https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh_400x400.jpg' alt="" />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
        
      </div>
    </div> ) }
export default Navbar
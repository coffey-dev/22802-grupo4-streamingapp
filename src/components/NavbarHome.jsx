import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import logo from "../images/header/logo.png";

const NavbarHome = () => {

  
    const[isScrolled, SetIsScrolled] = useState(false);

// Cuando se scrollea la página, si el PageYOffset es 0 (o sea, está todo arriba, da como resultado "false")

window.onscroll = () =>{
    SetIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
};




  return (
    <div className={isScrolled ? "navbar_navbar scrolled" : "navbar_navbar" }>
      
      <div className='navbar_container'>
        
        <div className='left'>
          <img src={logo} alt="" />
          <span>Inicio</span>
          <span>Series</span>
          <span>Películas</span>
          <span>Nuevas y Populares</span>
          <span>Mi lista</span>
        </div>

        <div className='right'>
          < SearchIcon className='icon' />
          <NotificationsIcon className='icon' />
          <img src='https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh_400x400.jpg' alt="" />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className="options">
              <span>Configuración</span>
              <span>Salir</span>
            </div>
          </div>
        </div>
        
      </div>
    </div> ) }
export default NavbarHome;
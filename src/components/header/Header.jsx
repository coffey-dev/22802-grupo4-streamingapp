import React from "react";
import './Header.css';
import logo from "../../images/header/logo.png";
import { useState } from "react";


function Header() {
  const[isScrolled, SetIsScrolled] = useState(false);

// Cuando se scrollea la página, si el PageYOffset es 0 (o sea, está todo arriba, da como resultado "false")

window.onscroll = () =>{
    SetIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
};
  return (

    <header className={isScrolled ? "navbar scrolled" : "navbar" }>
      <div className="encabezado">
        <h3 className="izq"><img src={logo} alt="Logo" className="logo" /></h3>
        <nav className="der">
        <a className="nav-link" href="#" aria-current="page"><button className="btn">Idioma</button></a>
        <a className="nav-link" href="#"> <button className="btn">Ingresar</button></a>
        </nav>
      </div>
    </header>


  )
}
export default Header
import React from "react";
import logo from "../images/header/logo.png";
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
      <div className="encabezado_container">
        <div className="encabezado_izq"><img src={logo} alt="Logo" className="encabezado_logo" /></div>
        <nav className="encabezado_der">
        <button className="encabezado_btn">Registrate</button>
         <button className="encabezado_btn">Ingresar</button>
        </nav>
      </div>
    </header>


  )
}
export default Header
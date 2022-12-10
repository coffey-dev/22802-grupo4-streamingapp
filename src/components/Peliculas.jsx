import React, { useRef } from 'react';
import "../assets/stylessheets/Peliculas.scss";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";
import Pelicula from './Pelicula';



export default function Peliculas() {

  const [isMoved, setIsMoved] = useState(false);

  // Se crea un controlador del número de "diapositivas" para que el slider se mueva dentro de los items ingresados //
  
  const [slideNumber, setSlideNumber] = useState(0);

// Se llama a useRef para evitar usar documet.getElementByID y se coloca ref en el div de container //

  const listRef = useRef();


// cuando se clickea, debería mover 230 px, que es el ancho total de cada item //  
const handleClick = (direction) =>{

  //Cuando se clickea, cambia el estado de IsMoved a true //
  setIsMoved(true);

  // Utilizamos un método "getBoundingClientRect" que indica donde se está ubicando el item cuando se mueve -incluidos los pixeles del botón //
  let distance = listRef.current.getBoundingClientRect().x -50
if(direction === "left" && slideNumber > 0) {
  setSlideNumber(slideNumber - 1);
listRef.current.style.transform = `translateX(${230 + distance}px)`
}

if(direction === "right" && slideNumber < 5){
  setSlideNumber(slideNumber + 1);
  listRef.current.style.transform = `translateX(${-230 + distance}px)`
  }

}


  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className='wrapper'>
<ArrowBackIosOutlinedIcon 
className='sliderArrow left' 
onClick={()=>handleClick("left")}

// Cuando el valor de IsMoved es falso, el botón pasa a ser "none" y no se muestra //
style={{display: !isMoved && "none"} }
/>

<div className='container' ref={listRef}>
<Pelicula index={1}  />
<Pelicula index={2}  />
<Pelicula index={3}  />
<Pelicula index={4}  />

</div>

<ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")} />
        </div>
        </div>
  )
}



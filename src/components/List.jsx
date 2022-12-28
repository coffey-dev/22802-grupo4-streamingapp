import React, { useRef } from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './ListItem';
import { useState } from "react";

export default function List() {

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
    <div className='list_list'>
        <span className='listTitle'>Seguir viendo</span>
        <div className='wrapper'>
          <ArrowBackIosOutlinedIcon 
          className='sliderArrow left' 
          onClick={()=>handleClick("left")}

// Cuando el valor de IsMoved es falso, el botón pasa a ser "none" y no se muestra //
        style={{display: !isMoved && "none"} }
        />

<div className='containerlist' ref={listRef}>
    <ListItem index={0}  />
    <ListItem index={1}  />
    <ListItem index={2}  />
    <ListItem index={3}  />
    <ListItem index={4}  />
    <ListItem index={5}  />
    <ListItem index={6}  />
    <ListItem index={7}  />
    <ListItem index={8}  />
    <ListItem index={9}  />
</div>

<ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")} />
        </div>
        </div>
  )
}

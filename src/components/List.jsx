import React, { useRef } from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './ListItem';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function List({id}) {

  const [isMoved, setIsMoved] = useState(false);

  // Se crea un controlador del número de "diapositivas" para que el slider se mueva dentro de los items ingresados //

  const [slideNumber, setSlideNumber] = useState(0);

  // Se llama a useRef para evitar usar documet.getElementByID y se coloca ref en el div de container //

  const listRef = useRef();




  // cuando se clickea, debería mover 230 px, que es el ancho total de cada item //  
  const handleClick = (direction) => {

    //Cuando se clickea, cambia el estado de IsMoved a true //
    setIsMoved(true);

    // Utilizamos un método "getBoundingClientRect" que indica donde se está ubicando el item cuando se mueve -incluidos los pixeles del botón //
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '5781dc68edd336a415b02ad15023cdf1';
  // const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original/';

  // variables de estado
  const [movies, setMovies] = useState([]);
  //  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    //funcion para realizar la petición por get a la api
    const traerPeliculas = async (searchKey) => {
      const type = searchKey ? "search" : "discover";
      const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie`, {
        params: { 
          api_key: API_KEY,
          language: "es-ES",
          sort_by: "popularity.desc",
          with_genres: id,
          query: searchKey,
        }
      });
      console.log(results);

      setMovies(results);

    }
    traerPeliculas();
  }, [id]);

  return (
    <div className='list_list'>
      <span className='listTitle'>Seguir viendo</span>
      <div className='wrapper'>
        <ArrowBackIosOutlinedIcon
          className='sliderArrow left'
          onClick={() => handleClick("left")}

          // Cuando el valor de IsMoved es falso, el botón pasa a ser "none" y no se muestra //
          style={{ display: !isMoved && "none" }}
        />

        <div className='containerlist' ref={listRef}>
          {
            movies.map((pelicula, index) => {
              return (
                <ListItem 
                  index={index}
                  url={URL_IMAGE+pelicula.poster_path}
                  titulo={pelicula.original_title}
                  estreno={pelicula.release_date}
                  sinopsis={pelicula.overview}
                />
                // <input onChange={(e) => updateCaption(e, index)} key={index} />
              )
            })
            
          }
        </div>

        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")} />
      </div>
    </div>
  )
}

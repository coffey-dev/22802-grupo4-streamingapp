import React, { useRef } from 'react';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './ListItem';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function List() {

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
  const [trailer, setTrailer] = useState("https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761");
  const [movie, setMovie] = useState({ title: "Cargando Películas..." });
  //  const [playing, setPlaying] = useState(false);

  // Coloca cada uno de los items en un lugar correcto al posar el mouse sobre el item en cuestión // 
  const [isHovered, setIsHovered] = useState(false);



  // traer la info de un objeto y mostrar trailer en reproductor
  const traerPelicula = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "video"
      }
    })
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  useEffect(() => {
    //funcion para realizar la petición por get a la api
    const traerPeliculas = async (searchKey) => {
      const type = searchKey ? "search" : "discover";
      const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        }
      });
      // results.forEach(movie => {
      //   console.log(movie);
      // });
      setMovies(results);
      setMovie(results[0]);

      if (results.length) {
        await traerPelicula(results[0].id)
      }

    }
    traerPeliculas();
  }, []);

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
              console.log(pelicula);
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
          {/* <ListItem index={0}  />
    <ListItem index={1}  />
    <ListItem index={2}  />
    <ListItem index={3}  />
    <ListItem index={4}  />
    <ListItem index={5}  />
    <ListItem index={6}  />
    <ListItem index={7}  />
    <ListItem index={8}  />
    <ListItem index={9}  /> */}
        </div>

        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")} />
      </div>
    </div>
  )
}

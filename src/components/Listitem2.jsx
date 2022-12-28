import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState, useEffect } from "react";
import axios from 'axios';



export default function ListItem({ index }) {
  
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
    const traerPelicula = async(id) =>{
      const {data} = await axios.get(`${API_URL}/movie/${id}` , {
        params: {
          api_key: API_KEY,
          append_to_response: "video"
        }
      })
  
      if(data.videos && data.videos.results){
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0])
      }
      setMovie(data)
    }

    useEffect(() => {
       //funcion para realizar la petición por get a la api
    const traerPeliculas = async(searchKey) =>{
      const type = searchKey ? "search" : "discover";
      const {data: {results}, } = await axios.get(`${API_URL}/${type}/movie` , {
        params: {
          api_key: API_KEY,
          query: searchKey,
        }
      });
    
      setMovies(results);
      setMovie(results[0]);
  
      if (results.length){
        await traerPelicula(results[0].id)
      }
  
    }
    traerPeliculas();
    }, []);

  return (
    <div className='container mt-3'>
      <div className='row'>
        {movies.map((movie) => (
          <div key={movie.id} className='col mb-2'>
            <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={350} width="auto" />
          </div>
        ))}
      </div>
  </div>
  );
}


    //   <div
    //   className="listItem"
    //   style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    //   >
    //   <img
    //     src={`${URL_IMAGE + pelicula.poster_path}`}
    //     alt=""
    //   />
    //   {isHovered && (
    //     <>
    //       <video src={trailer} autoPlay={true} loop />
    //       <div className="itemInfo">
    //         <div className="iconoslistitem">
    //           <PlayArrowIcon className="icono" />
    //           <AddIcon className="icono" />
    //           <ThumbUpOutlinedIcon className="icono" />
    //           <ThumbDownOffAltOutlinedIcon className="icono" />
    //         </div>
    //         <div className="itemInfoTop">
    //           <span>{movies[0].runtime}</span>
    //           <span className="limit">{movies[0].adult}</span>
    //           <span>{movies[0].release_date}</span>
    //         </div>
    //         <div className="desc">
    //           {movies[0].overview}
    //         </div>
    //         <div className="genre">{movies[0].genre_ids[0]}</div>
    //       </div>
    //     </>
    //   )}
    // </div>
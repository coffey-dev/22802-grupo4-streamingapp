import "../assets/stylessheets/Pelicula.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";

const cargarPeliculas = async(pagina) =>{
    try{
      const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5781dc68edd336a415b02ad15023cdf1&language=es-MX&page=${pagina}`);
      console.log(respuesta);
  
      if(respuesta.status === 200){
        const datos = await respuesta.json();
        // let peliculas = "";
        // datos.results.forEach(pelicula => {
        //   // peliculas += `
        //   //   <div class="pelicula">
        //   //     <img class"poster" src="https://image.tmdb.org/t/p/w200/${pelicula.poster_path}">
        //   //   </div>  
        //   // `;
          
        // });
        return datos;
      }
      else if(respuesta.status === 401){
        console.log("key incorrecta");}
    }
  
    catch(error){
      console.log(error.message);
    }
  }

export default function Pelicula({ index }) {
  
  
  // Coloca cada uno de los items en un lugar correcto al posar el mouse sobre el item en cuestión // 
  const [isHovered, setIsHovered] = useState(false);
  
  let paginaPeliculas = cargarPeliculas(index);
  
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    paginaPeliculas.results.forEach(pelicula => {
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://image.tmdb.org/t/p/w200/${pelicula.poster_path}"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
    })
    
  );
}
{/*
<ReactPlayer
          className='react-player'
          url={trailer}
          playing={true}
         loop={true}
         muted={true}

        />
*/}






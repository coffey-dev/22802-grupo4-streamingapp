import React, { useState } from 'react';
import '../assets/stylessheets/Peliculas.css';
import axios from 'axios';
import YouTube from 'react-youtube';

function Peliculas() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '5781dc68edd336a415b02ad15023cdf1';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Cargando Películas..." });
  const [playing, setPlaying] = useState(false);

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

    if (results.lenght){
      await traerPelicula(results[0].id)
    }

  }



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
    console.log(data)
  }

  const seleccionarPelicula = async(movie) => {
    traerPelicula(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

  // funcion para buscar peliculas por nombre
  const buscarPelicula = (e) => {
    e.preventDefault();
    traerPeliculas(searchKey);
  }

  // useEffect(() => {
  //   traerPeliculas();
  // }, []);

  return (
    <div>
      {/* <h2 className='text-center mt-5 mb-5'>Lista de películas</h2> */}
      {/* buscador de peliculas */}
      <form  className='container mb-4' onSubmit={buscarPelicula}>
        <div className="input-group">
          <span className="input-group-text">Búsqueda</span>
          <input className='text form-control' type="text" aria-label="First name" placeholder='buscar...' onChange={(e) =>
          setSearchKey(e.target.value)} />
          <button className='btn btn-primary ms-3'>Buscar</button>
        </div>
      </form>
      
      {/* contenedor del banner y reproductor de video */}
      <div>
        <main>
          {movie ? (
            <div className='verTrailer' 
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      }
                    }}
                    />
                    <button onClick={() => setPlaying(false)} className="boton">
                      Cerrar
                    </button>
                </>
              ) : (
                <div className='container'>
                  <div className=''>
                    {trailer ? (
                      <button 
                        className='boton'
                        onClick={()=> setPlaying(true)}
                        type="button"  
                      >
                        Ver trailer
                      </button>
                    ) : (
                      ""
                      // "Lo siento, no se encuentra el trailer"
                    )}
                    <h1 className='text-white'>{movie.title}</h1>
                    <p className='text-white'>{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      {/* contenedor que va a mostrar las peliculas actuales */}
      <div className='container mt-3'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie.id} className='col-md-3 mb-3' onClick={()=> seleccionarPelicula(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={350} width="auto" />
              {/* <h4 className='text-center'>{movie.title}</h4> */}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Peliculas;

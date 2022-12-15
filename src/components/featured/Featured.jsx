import React from 'react';
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (

            <div className='category'>
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
<option value="adventure">Adventure</option>
<option value="comedy">Comedy</option>
<option value="crime">Crime</option>
<option value="fantasy">Fantasy</option>
<option value="historical">Historical</option>
<option value="horror">Horror</option>
<option value="romance">Romance</option>
<option value="sci-fi">Sci-fi</option>
<option value="thriller">Thriller</option>
<option value="western">Western</option>
<option value="animation">Animation</option>
<option value="drama">Drama</option>
<option value="documentary">Documentary</option>

                </select>
            </div>
        )}
        
        <img src="https://as01.epimg.net/meristation/imagenes/2019/08/25/noticias/1566688974_909553_1566689078_noticia_normal.jpg" alt="" />

        <div className='info'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Star_Wars_The_Rise_of_Skywalker.png'  alt="" />
    
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe aliquam est ipsa voluptatum sapiente, modi cumque laudantium? Recusandae est velit, corporis nobis repellat labore odit dignissimos minima. Totam, rem?
        </span>

        <div className='buttons'>
        <button className="play">
            <PlayArrowIcon />
            <span className="Play">Play</span>


        </button>
        
        <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
        
        </button>
        </div>

        </div>
        </div>
  )
}

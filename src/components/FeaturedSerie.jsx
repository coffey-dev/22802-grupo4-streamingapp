import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Banner from '../assets/images/wednesday-addams-thing-review-banner.png';
import BannerSmall from '../assets/images/wednesday.jpg';

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
        
        <img src={Banner} alt="" />

        <div className='info'>
        <img src={BannerSmall}  alt="" />
    
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe aliquam est ipsa voluptatum sapiente, modi cumque laudantium? Recusandae est velit, corporis nobis repellat labore odit dignissimos minima. Totam, rem?
        </span>

        <div className='button'>
        <button className="play">
            <PlayArrowIcon />
            <span className="Play">Reproducir</span>


        </button>
        
        <button className="more">
            <InfoOutlinedIcon />
            <span>Más info</span>
        
        </button>
        </div>

        </div>
        </div>
  )
}

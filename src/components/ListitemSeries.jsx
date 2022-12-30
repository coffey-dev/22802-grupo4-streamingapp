import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";
import '../styles/_listItem.scss';



export default function ListItemSeries( props) {

  //  const [searchKey, setSearchKey] = useState("");
   const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  // Coloca cada uno de los items en un lugar correcto al posar el mouse sobre el item en cuestión // 
  const [isHovered, setIsHovered] = useState(false);
  
  // traer la info de un objeto y mostrar trailer en reproductor

  return (
    <div
      className="listItem"
      style={{ left: isHovered && props.index * 225 - 50 + props.index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${props.url}`}
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
              <span>{props.titulo}</span>
              <span className="limit">{props.estreno}</span>
            </div>
            <div className="desc">
              {props.sinopsis}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
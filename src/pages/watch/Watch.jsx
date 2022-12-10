import React from 'react';
import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
  return (
    <div className='watch'>
<div className="back">
    <ArrowBackOutlinedIcon />
    Home

</div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/AXRAdmJvzcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}

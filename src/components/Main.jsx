import React from "react";
import background from "../images/main/back_lp.png";
import fotoUno from "../images/main/foto_1.jpg";
import fotoDos from "../images/main/foto_2.jpg";

function Main() {
  return (
    <div className="main_container">
      <div className="main_fondo" style={{ backgroundImage: `url(${background})` }
      }>
        <div className="main_encabezado">
          <h1>Películas y Series ilimitadas.</h1>
          <p>Disfruta donde y cuando quieras.</p>

          <div className="main_inputgroup">
            <input type="text" className="main_formcontrol" placeholder="Tu email" aria-label="Tu email" aria-describedby="button-addon2" />
            <button className="main_btn" type="button" id="button-addon2">Ingresar</button>
          </div>
        </div>
      </div >
      <section>
        <div  className="main_seccion"><h2>Aplicación disponible</h2><p> en tus dispositivos móviles y de escritorio.</p></div>
        <div><img src={fotoUno} alt="Foto" className="main_fotos" /></div>
      </section>
      <section className="main_seccion">
        <div><img src={fotoDos} alt="Foto" className="main_fotos" /></div>
        <div  className="main_seccion"><h2>Descargá tus películas</h2><p>en todos tus dispositivos.</p></div>
      </section>
    </div>

  )
}

export default Main;
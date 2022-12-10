import React from "react";
import './Landing.css'
import background from './back_lp.png'
import fotoUno from './foto_1.jpg'
import fotoDos from './foto_2.jpg'

function Main() {
  return (
    <main>
      < div className="pelis" style={{ backgroundImage: `url(${background})` }
      }>
        <div className="pelis_encabezado">
          <h1>Películas y Series ilimitadas.</h1>
          <p>Disfruta donde y cuando quieras.</p>

          <div className="input-group">
            <input type="text" className="form-control" placeholder="Tu email" aria-label="Tu email" aria-describedby="button-addon2" />
            <button className="btn" type="button" id="button-addon2">Ingresar</button>
          </div>
        </div>
      </div >
      <section>
        <div className="seccion uno"><h2>Aplicación disponible</h2><p> en tus dispositivos móviles y de escritorio.</p></div>
        <div><img src={fotoUno} alt="Foto" className="foto" /></div>
      </section>
      <section>
        <div><img src={fotoDos} alt="Foto" className="foto" /></div>
        <div className="seccion dos"><h2>Descargá tus películas</h2><p>en todos tus dispositivos.</p></div>
      </section>
    </main >

  )
}

export default Main;
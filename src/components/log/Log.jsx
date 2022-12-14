import React from "react";
import './Log.css';

function Log() {
  return (
    <div className="container w-25">
      <div className="row text-white">
        <div className="col"></div>
        <h2 className="mb-3">Inicia sesión</h2>
        <form className="mt-2">
          <div className="mb-4">
            <label for="email" className="form-label"><i className="fa-solid fa-envelope"></i> Correo electrónico</label>
            <input
              placeholder="correo@ejemplo.com"
              className="form-control"
            ></input>
          </div>
          <div className="mb-4">
            <label for="password" className="form-label"><i className="fa-solid fa-lock"></i> Contraseña</label>
            <input
              placeholder="••••••••••••••"
              className="form-control"
            ></input>
          </div>
          <div className="d-grid mb-4">
            <button type="submit" className="btn btnIniciarSesion fw-bold">Iniciar sesión</button>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btnRecuperarContraseña fw-bold">Recuperar contraseña</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Log

import React from "react";
import { useState } from "react";
import "../styles/_log.scss";
import MailSharpIcon from '@mui/icons-material/MailSharp';
import HttpsSharpIcon from '@mui/icons-material/HttpsSharp';
import validation from "./register/validation.js"



function Log() {

  const [values, setValues] = useState({
    email: "",
    pass: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    setErrors(validation(values));
  };
  
  return (
    <div className="container w-25">
      <div className="row text-white">
        <div className="col"></div>
        <h2 className="mb-3">Inicia sesión</h2>
        <form className="mt-2">
          <div className="mb-4">
            <label for="email" className="form-label"><div className="log-icon"><MailSharpIcon/> Correo electrónico</div></label>
            <input
              placeholder="nombre@ejemplo.com"
              className="form-control"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange} 
            ></input>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label for="password" className="form-label"><div className="log-icon"><HttpsSharpIcon/> Contraseña</div></label>
            <input
              placeholder="••••••••••••••"
              className="form-control"
              type="password"
              name="pass"
              value={values.pass}
              onChange={handleChange} 
            ></input>
            {errors.pass && <p className="error">{errors.pass}</p>}
          </div>
          <div className="d-grid mb-4">
            <button type="submit" className="btn btnIniciarSesion fw-bold" onClick={handleFormSubmit}>Iniciar sesión</button>
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

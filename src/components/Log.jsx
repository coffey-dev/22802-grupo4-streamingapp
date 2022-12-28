import React from "react";
import { useState } from "react";
import "../styles/_log.scss";
import MailSharpIcon from '@mui/icons-material/MailSharp';
import HttpsSharpIcon from '@mui/icons-material/HttpsSharp';
import validation from "./register/validation.js"
import PopupEmailNuevo from "./PopupEmailNuevo";
import PopupErrorConexion from "./PopupErrorConexion";
import PopupLoginExitoso from "./PopupLoginExitoso";
import {useNavigate} from "react-router-dom";
import PopupPasswordIncorrecto from "./PopupPasswordIncorrecto";


function Log() {

  const navigate = useNavigate();

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
    checkEmail(values.email);
    setErrors(validation(values));
  };
  
  const checkEmail = async (email) => {

    //Send HTTP request
    const response = await fetch("https://22802-grupo4-streamingapp-backend.jimmygonzalez5.repl.co/api/user/"+email)
      .then(res => res.json())
      .then(res => res);

    if (response.email){
      // console.log("Verifica contraseña");

      //Check pass
      if(values.pass === response.password){
        // console.log("Bienvenido");
        PopupLoginExitoso();
        setTimeout(()=>{
          navigate("/home");
        },3000);

      }
      else{
        console.log("Contraseña incorrecta");
        PopupPasswordIncorrecto();
      }
    }
    else if(response.uiMessage){
      // console.log("El correo ingresado no esta asociado a ninguna cuenta");
      PopupEmailNuevo();
    }
    else{
      // console.log("Error de conexion");
      PopupErrorConexion();
    }
  }

  return (
    <div className="container containerLogeo w-25">
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

// Imports de Sebas
import React, { useRef } from 'react';
// import "./register.scss";
import { useState } from "react";

//Son los imports del register (Nico)
// import React from "react";
import './register.css';

//Imports de validaciones
import validation from "./validation"

export default function Register() {
  //Agrego constantes de valores, y de errores. (Emi)

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
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
    setErrors(validation(values))
  };

  //Comento el código anterior (Emi)
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };
  // const handleFinish = () => {
  //   setPassword(passwordRef.current.value);
  // };
  return (

    <div className="container w-25">
      <div className="row text-white">
        <div className="col"></div>
        <h2 className="mb-4">Crea tu cuenta</h2>
        <form className="mt-2">
          <div className="mb-4">
            <label htmlFor="name" className="form-label"><i className="fa-solid fa-user"></i> Nombre</label>
            <input
              placeholder="Madison"
              className="form-control"
              //Agrego variables (Emi)
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            ></input>
            {/* Mensaje de Error(Emi) */}
             {errors.nombre && <p className="error">{errors.nombre}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="form-label"><i className="fa-solid fa-user"></i> Apellido</label>
            <input
              placeholder="Jackson"
              className="form-control"
              //Agrego variables (Emi)
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
            ></input>
              {/* Mensaje de Error(Emi) */}
             {errors.apellido && <p className="error">{errors.apellido}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label"><i className="fa-solid fa-envelope"></i> Correo electrónico</label>
            <input
              placeholder="nombre@ejemplo.com"
              className="form-control"
              type="email"
              //Agrego variables  (Emi)
              name="email"
              value={values.email}
              onChange={handleChange} 
            ></input>
            {/* Mensaje de Error(Emi) */}
             {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label"><i className="fa-solid fa-lock"></i> Contraseña</label>
            <input
              placeholder="••••••••••••••"
              className="form-control"
              type="password"
              //Agrego variables (Emi)
              name="pass"
              value={values.pass}
              onChange={handleChange} 
            ></input>
            {/* Mensaje de Error (Emi) */}
            {errors.pass && <p className="error">{errors.pass}</p>}
          </div>
          <div className="mb-4">
            <button
              type="menu"
              className="btn btnVolver">Volver</button>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btnRegistrarse fw-bold" onClick={handleFormSubmit}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// export default Register
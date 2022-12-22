// Imports de Sebas
import React from 'react';
import { useState } from "react";
import validation from "./validation"
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import HttpsSharpIcon from '@mui/icons-material/HttpsSharp';
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  //Agrego constantes de valores, y de errores. (Emi)

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pass: ""
  });

  const navigate = useNavigate();

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
    // https://22802-grupo4-streamingapp-backend.jimmygonzalez5.repl.co/api/user/j@gmail.com
    const response = await fetch("https://22802-grupo4-streamingapp-backend.jimmygonzalez5.repl.co/api/user/"+email)
      .then(res => res.json())
      .then(res => res);

    console.log(response);

    if (response.uiMessage){
      console.log('Crea la cuenta');
    }else if (response.email){
      console.log('Existe otra cuenta con ese email');
    }else{
      console.log('Error de conexion');
    }
  }

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
            <label htmlFor="name" className="form-label"><div className="register-icon"><PersonSharpIcon/> Nombre</div></label>
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
            <label htmlFor="name" className="form-label"><div className="register-icon"><PersonSharpIcon/> Apellido</div></label>
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
            <label htmlFor="email" className="form-label"><div className="register-icon"><MailSharpIcon/> Correo electrónico</div></label>
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
            <label htmlFor="password" className="form-label"><div className="register-icon"><HttpsSharpIcon/> Contraseña</div></label>
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
              className="btn btnVolver" onClick={() => navigate('/')}>Volver</button>
          </div>
          <div className="d-grid">
            <button type="submit" className="btnRegistrarse fw-bold" onClick={handleFormSubmit}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// export default Register
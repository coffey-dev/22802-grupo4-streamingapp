// Imports de Sebas
import React, { useRef } from 'react';
// import "./register.scss";
import { useState } from "react";

//Son los imports del register (Nico)
// import React from "react";
import '../login/Login.css';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
//     <div className="register">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//             alt=""
//           />
//           <button className="loginButton">Sign In</button>
//         </div>
//       </div>
//       <div className="container">
//         <h1>Unlimited movies, TV shows, and more.</h1>
//         <h2>Watch anywhere. Cancel anytime.</h2>
//         <p>
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         {!email ? (
//           <div className="input">
//             <input type="email" placeholder="email address" ref={emailRef} />
//             <button className="registerButton" onClick={handleStart}>
//               Get Started
//             </button>
//           </div>
//         ) : (
//           <form className="input">
//             <input type="password" placeholder="password" ref={passwordRef} />
//             <button className="registerButton" onClick={handleFinish}>
//               Start
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



// function Register() {
  // return (
    <div className="container w-25">
      <div className="row text-white">
        <div className="col"></div>
        <h2 className="mb-4">Crea tu cuenta</h2>
        <form className="mt-2">
          <div className="mb-4">
            <label for="name" className="form-label"><i className="fa-solid fa-user"></i> Nombre</label>
            <input
              placeholder="Madison"
              className="form-control"
            ></input>
          </div>
          <div className="mb-4">
            <label for="name" className="form-label"><i className="fa-solid fa-user"></i> Apellido</label>
            <input
              placeholder="Jackson"
              className="form-control"
            ></input>
          </div>
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
          <div className="mb-4">
            <button
              type="menu"
              className="btn btnVolver">Volver</button>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btnRegistrarse fw-bold">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// export default Register
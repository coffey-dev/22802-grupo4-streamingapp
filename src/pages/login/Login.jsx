// import "./login.scss";

// export default function Login() {
//   return (
//     <div className="login">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="container">
//         <form>
//           <h1>Sign In</h1>
//           <input type="email" placeholder="Email or phone number" />
//           <input type="password" placeholder="Password" />
//           <button className="loginButton">Sign In</button>
//           <span>
//             New to Netflix? <b>Sign up now.</b>
//           </span>
//           <small>
//             This page is protected by Google reCAPTCHA to ensure you're not a
//             bot. <b>Learn more</b>.
//           </small>
//         </form>
//       </div>
//     </div>
//   );
// }



import React from "react";
import './Login.css';

function Login() {
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

export default Login

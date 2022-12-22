//npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Landing from "./pages/Landing";



const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />}></Route>
          <Route path="/register" exact element={<Registro />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/watch" exact element={<Watch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  ;
};

export default App;
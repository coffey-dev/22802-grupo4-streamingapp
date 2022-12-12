import "./app.css";
import Home from "../src/pages/home/Home";
import Watch from "../src/pages/watch/Watch";
import Register from "../src/pages/register/Register";
import Login from "../src/pages/login/Login";
import Landing from "../src/pages/landing/Landing";
import Header from "../src/components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return(
    <div>
      <Header/>
      <Register />
      <Footer />
    </div>
  )
  // return <Home />;
};

export default App;
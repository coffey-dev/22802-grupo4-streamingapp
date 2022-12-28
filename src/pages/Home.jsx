import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Featured from '../components/Featured';
import List from '../components/List';
import Footer from '../components/Footer';
import Peliculas from '../components/Peliculas';




const Home = () => {
  return (
    <div className='home'>
      
        <NavbarHome />
       <Featured />
       <List />
       <List />
       <List />
       <List />
       <Footer />
    </div>
  )
}

export default Home
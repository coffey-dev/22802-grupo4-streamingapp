import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Featured from '../components/Featured';
import List from '../components/List';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className='home'>
      
        <NavbarHome />
       <Featured />
       <List id="12"/>
       <List id="35" />
       <List id="18"/>
       <List id="10749"/>
       <Footer />
    </div>
  )
}

export default Home
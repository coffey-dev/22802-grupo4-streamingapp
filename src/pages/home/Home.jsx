import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import List from '../../components/List/List';
import "./home.scss";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';




const Home = () => {
  return (
    <div className='home'>
      
        <Navbar />
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
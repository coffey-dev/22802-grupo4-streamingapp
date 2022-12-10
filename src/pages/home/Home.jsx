import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import List from '../../components/List/List';
import "./home.scss";



const Home = () => {
  return (
    <div className='home'>
      
        <Navbar />
       <Featured />
       <List />
       <List />
       <List />
       <List />
       

        </div>
  )
}

export default Home
import React from 'react';
import NavbarHome from '../components/NavbarHome';
import FeaturedSerie from '../components/FeaturedSerie';
import ListSeries from '../components/ListSeries';
import Footer from '../components/Footer';

const Serie = () => {
  return (
    <div className='home'>      
        <NavbarHome />
        <FeaturedSerie />
        <ListSeries page="1"/>
        <ListSeries page="2"/>
        <ListSeries page="3"/>
        <ListSeries page="4"/>
        <Footer />
    </div>
  )
}

export default Serie
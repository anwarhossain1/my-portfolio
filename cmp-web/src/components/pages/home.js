import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards/Cards';
// import MapG from '../Map/MapG';
import Footer from '../Footer/Footer'

function home() {
    return (
        <>
        
          <HeroSection/>  
          <Cards/>
          {/* <MapG/> */}
          <Footer/>
        </>
    )
}

export default home;


import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import imgBannerHome from '../assets/sea.png';
import HousingCards from '../components/HousingCards';
import Footer from '../components/Footer'

const Home = () => {
    return (
      <div>
        <Header />
        <Banner imageUrl={imgBannerHome} text={"Chez vous, partout et ailleurs"}/>
        <HousingCards />
        <Footer />
      </div>
    );
  };
  
  export default Home;
import React from 'react';
import Banner from '../components/Banner';
import imgBannerHome from '../assets/sea.png';
import HousingCards from '../components/HousingCards';

const Home = () => {
    return (
      <div>
        <Banner imageUrl={imgBannerHome} text={"Chez vous, partout et ailleurs"}/>
        <HousingCards />
      </div>
    );
  };
  
  export default Home;
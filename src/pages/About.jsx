import React from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner'
import imgBannerAbout from '../assets/mountains.png'
//import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header />
            <Banner imageUrl={imgBannerAbout}/>
          
            <Footer />
        </div>
    );
};

export default About;

import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import imgBannerAbout from '../assets/mountains.png'
import aboutData from '../data/aboutData.json'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header />
            <Banner imageUrl={imgBannerAbout} />
            <main className='main_about'>
                {aboutData.map((data, index) => (
                    <Collapse key={index} title={data.title} content={data.description} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default About;

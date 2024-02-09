import React from 'react'
import Banner from '../components/Banner'
import imgBannerAbout from '../assets/mountains.png'
import aboutData from '../data/aboutData.json'
import Collapse from '../components/Collapse'

const About = () => {
    return (
        <div>
            <Banner imageUrl={imgBannerAbout} isMobile={true} />
            <main className='main_about'>
                {aboutData.map((data, index) => (
                    <Collapse key={index} title={data.title} content={data.description} />
                ))}
            </main>
        </div>
    );
};

export default About;

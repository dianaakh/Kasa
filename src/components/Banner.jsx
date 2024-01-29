import React from 'react';

const Banner = ({ imageUrl, text }) => {
    return (
    < div className='banner'>
        <div className="image-container">
            <img src={imageUrl} alt="Bannière" />
            <div className="text-container">
                <h2>{text}</h2>
            </div>
        </div>
      </div >
    );
};

export default Banner;
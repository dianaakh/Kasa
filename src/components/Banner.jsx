import React from 'react';

const Banner = ({ imageUrl }) => {
    return (
    < div className='banner'>
        <div className="image-container">
            <img src={imageUrl} alt="Bannière" />

            <div className="text-container">
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
        </div>
      </div >
    );
};

export default Banner;
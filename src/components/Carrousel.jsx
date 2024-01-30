import React, { useState } from 'react';
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";

const Carrousel = ({ housingData }) => {
       
    const [currentImageIndex, setCurrentImageIndex] = useState(0);   // Utilisation de useState pour gérer l'index de l'image actuellement affichée
    const imageCount = housingData.pictures.length;  //variable pour savoir le nombre d'image qu'il y a dans le tableau
  
    const changeImage = (direction) => {
      setCurrentImageIndex((index) => (index + direction + imageCount) % imageCount);
    };
  
       // Si le carrousel ne contient qu'une seule image, l'afficher sans la pagination et les flèches.
    if (imageCount === 1) {
      return <img src={housingData.pictures[0]} alt={housingData.title} className='img_alone' />;
    }
  
    const displayImageCount = `${currentImageIndex + 1}/${imageCount}`;
  
    return (
      <div className="carrousel_container">
        <img src={housingData.pictures[currentImageIndex]} alt={housingData.title} />
        <div className="pagination">{displayImageCount}</div>
        <div>
          <img className="arrow_left" src={arrowLeft} alt="précédent" onClick={() => changeImage(-1)} />
          <img className="arrow_right" src={arrowRight} alt="suivant" onClick={() => changeImage(1)} />
        </div>
      </div>
    );
  };
  
  export default Carrousel;
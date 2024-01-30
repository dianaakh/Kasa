import React from 'react';
import { NavLink } from 'react-router-dom';
import housingData from '../data/housingData.json';

const HousingCards = () => {
  return (
    <main className='housing-cards'>
      {/* Div principale pour la liste de cartes */}
      {housingData.map((logement) => (
        <div key={logement.id} className='card'>
          {/* Carte individuelle */}
          <NavLink to={`/housing/${logement.id}`}>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </NavLink>
        </div>
      ))}
    </main>
  );
};

export default HousingCards;
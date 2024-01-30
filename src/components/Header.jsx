import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="nav">
      {/* Logo cliquable redirigeant vers la page d'accueil */}
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <ul>
        {/* Lien de navigation pour la page d'accueil */}
        <Link to="/">
          <li>Accueil</li>
        </Link>
        {/* Lien de navigation pour la page "A Propos" */}
        <Link to="/About">
          <li>A Propos</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
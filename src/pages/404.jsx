import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page404 = () => {
  return (
    <div>
      <Header />
      <main className='main_error'>
        <h1>404</h1>
        <p className='text_error'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="link_error">
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </main>
      <Footer />
    </div>
  );
};

export default Page404;
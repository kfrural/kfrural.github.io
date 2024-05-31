import React, { useState } from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    home: 'Início',
    about: 'Sobre',
    events: 'Eventos',
    projects: 'Projetos',
    contact: 'Contato'
  },
  en: {
    home: 'Home',
    about: 'About',
    events: 'Events',
    projects: 'Projects',
    contact: 'Contact'
  }
};

const Header = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const translation = translations[language];

  return (
    <nav className='header'>
      <div>
        <h1>Karla Ferreira</h1>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#hero" onClick={handleMenuItemClick}>{translation.home}</a></li>
        <li><a href="#about" onClick={handleMenuItemClick}>{translation.about}</a></li>
        <li><a href="#eventos" onClick={handleMenuItemClick}>{translation.events}</a></li>
        <li><a href="#projetos" onClick={handleMenuItemClick}>{translation.projects}</a></li>
        <li><a href="#contato" onClick={handleMenuItemClick}>{translation.contact}</a></li>
      </ul>
    </nav>
  );
}

export default Header;

import React, { useState } from 'react';
import './style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Header;

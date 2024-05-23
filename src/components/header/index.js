import React from 'react';
import './style.css';

const Header = () => {
  return (
    <nav className='header'>
      <div>
        <h1>Karla Ferreira</h1>
      </div>
      <ul>
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
import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const translations = {
  'pt-BR': {
    rightsReserved: '© 2024 Kfrural. Todos os direitos reservados.',
    developedBy: 'Desenvolvido por Karla Ferreira'
  },
  'en': {
    rightsReserved: '© 2024 Kfrural. All rights reserved.',
    developedBy: 'Developed by Karla Ferreira'
  }
};

const Footer = ({ language }) => {
  const translation = translations[language];

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='social-icons'>
          <a href="mailto:kferreira_@outlook.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/karla-ferreira-rural/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kfrural" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kf.rural" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className='footer-info'>
          <p>{translation.rightsReserved}</p>
          <p>{translation.developedBy}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
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
          <p>&copy; 2024 Kfrural. Todos os direitos reservados.</p>
          <p>Desenvolvido por Karla Ferreira</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

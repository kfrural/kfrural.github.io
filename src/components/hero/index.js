import React, { useState } from 'react';
import './style.css';
import profileImage from '../../assets/img2.png';
import avatarImage from '../../assets/avatar.png';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="hero" id='hero'>
      <div className="hero-content">
        <div
          className={`profile-image ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="front">
            <img src={profileImage} alt="Foto de Perfil" />
          </div>
          <div className="back">
            <img src={avatarImage} alt="Avatar" />
          </div>
        </div>
        <div className="hero-text">
          <h1>Karla C. Ferreira</h1>
          <h2>Desenvolvedora Full-Stack</h2>
          <p>
            Estudante de <strong>Ciência da Computação</strong> e{' '}
            <strong>Engenharia de Software</strong>, apaixonada por tecnologia e
            programação, com um profundo interesse na área de dados e análise.
            Atualmente, estou dedicando meu tempo e esforço para aprimorar
            minhas habilidades nesse campo, visando contribuir de forma
            significativa para o setor de tecnologia da informação. Acredito
            firmemente no poder dos dados para impulsionar a inovação e a tomada
            de decisões informadas. Estou entusiasmada com a possibilidade de
            desempenhar um papel ativo na revolução dos dados e ansiosa para
            embarcar nessa jornada de descoberta e transformação.{' '}
            <strong>Vamos juntos nessa jornada!</strong>
          </p>
          <div className="buttons">
            <a href="https://github.com/kfrural/" className="btn">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karla-ferreira-rural/" className="btn">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/kf.rural/" className="btn">
              Instagram
            </a>
            <a href="link_para_download_pdf" className="btn">
              Download Currículo (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

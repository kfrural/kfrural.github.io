import React, { useState } from 'react';
import './style.css';
import profileImage from '../../assets/img2.png';
import avatarImage from '../../assets/avatar.png';
import curriculo from '../../assets/Curriculo.pdf';

const translations = {
  'pt-BR': {
    title: 'Karla C. Ferreira',
    subtitle: 'Desenvolvedora Full-Stack',
    text: 'Estudante de <strong>Ciência da Computação</strong> e <strong>Engenharia de Software</strong>, apaixonada por tecnologia e programação, com um profundo interesse na área de <strong>dados</strong> e <strong>análise</strong>. Atualmente, estou dedicando meu tempo e esforço para aprimorar minhas habilidades nesse campo, visando contribuir de forma significativa para o setor de tecnologia da informação. Acredito firmemente no poder dos dados para impulsionar a inovação e a tomada de decisões informadas. Estou entusiasmada com a possibilidade de desempenhar um papel ativo na revolução dos dados e ansiosa para embarcar nessa jornada de descoberta e transformação. <strong>Vamos juntos nessa jornada!</strong>',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    downloadCurriculo: 'Download Currículo (PDF)'
  },
  en: {
    title: 'Karla C. Ferreira',
    subtitle: 'Full-Stack Developer',
    text: '<strong>Computer Science</strong> and <strong>Software Engineering</strong> student, passionate about technology and programming, with a deep interest in the field of <strong>data</strong> and <strong>analysis</strong>. Currently, I am dedicating my time and effort to improve my skills in this field, aiming to make a significant contribution to the information technology sector. I firmly believe in the power of data to drive innovation and informed decision-making. I am excited about the possibility of playing an active role in the data revolution and eager to embark on this journey of discovery and transformation. <strong>Let\'s go together on this journey!</strong>',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    downloadCurriculo: 'Download Resume (PDF)'
  }
};

const Hero = ({ language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleDownloadCurriculo = () => {
    window.open(curriculo);
  };

  const translation = translations[language];

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
          <h1>{translation.title}</h1>
          <h2>{translation.subtitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: translation.text }} />
          <div className="buttons">
            <a href="https://github.com/kfrural/" className="btn">
              {translation.github}
            </a>
            <a href="https://www.linkedin.com/in/karla-ferreira-rural/" className="btn">
              {translation.linkedin}
            </a>
            <a href="https://www.instagram.com/kf.rural/" className="btn">
              {translation.instagram}
            </a>
            <a href="link_para_download_pdf" className="btn" onClick={handleDownloadCurriculo}>
              {translation.downloadCurriculo}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

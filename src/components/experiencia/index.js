import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Experiência',
    company: 'EmComp - Empresa Júnior da Computação',
    position: 'Desenvolvedora Full-Stack',
    type: 'Tempo Integral',
    date: 'Maio de 2023 - Presente',
    location: 'Rio Pomba, Minas Gerais, Brasil',
    description: 'Trabalho voluntário como desenvolvedora <strong>Full-Stack</strong> na <strong>EmComp</strong>, participando de projetos de desenvolvimento de software e soluções tecnológicas para clientes e parceiros da empresa júnior.'
  },
  en: {
    title: 'Experience',
    company: 'EmComp - Computer Science Junior Company',
    position: 'Full-Stack Developer',
    type: 'Full-Time',
    date: 'May 2023 - Present',
    location: 'Rio Pomba, Minas Gerais, Brazil',
    description: 'Volunteer work as a <strong>Full-Stack</strong> developer at <strong>EmComp</strong>, participating in software development projects and technological solutions for the junior company\'s clients and partners.'
  }
};

const Experience = ({ language }) => {
  const translation = translations[language];

  return (
    <section className="experience-section">
      <h2>{translation.title}</h2>
      <ul>
        <li>
          <h3>{translation.company}</h3>
          <p className="position">{translation.position}</p>
          <p>{translation.type}</p>
          <p>{translation.date}</p>
          <p>{translation.location}</p>
          <p dangerouslySetInnerHTML={{ __html: translation.description }} />
        </li>
      </ul>
    </section>
  );
}

export default Experience;

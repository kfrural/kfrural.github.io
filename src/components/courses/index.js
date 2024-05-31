import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Cursos',
    courses: [
      "CC50: Introdução à Ciência da Computação - O Curso de Harvard, no Brasil",
      "Formação Cybersecurity Specialist",
      "Formação Linux Fundamentals",
      "Formação React Developer",
      "Aceleração Internacional DIO - Integrando Bancos de Dados SQL com Python e MongoDB",
      "Potência Tech Angular Developer - Powered by iFood",
      "Orange Tech + BackEnd",
      "Potência Tech powered by iFood | Ciências de Dados com Python",
      "Bootcamp Cloud AWS",
      "Descubra a Nuvem AWS - Nexa Resources",
      "Desenvolvimento Java com Cloud AWS",
      "Potência Tech iFood - Desenvolvimento de Jogos",
      "Banco PAN Java Developer ",
      "Bootcamp Microsoft Dynamics 365 ",
      "Santander 2024 - Backend com Java"
    ]
  },
  'en': {
    title: 'Courses',
    courses: [
      "CC50: Introduction to Computer Science - Harvard's Course in Brazil",
      "Cybersecurity Specialist Training",
      "Linux Fundamentals Training",
      "React Developer Training",
      "DIO International Acceleration - Integrating SQL Databases with Python and MongoDB",
      "Potência Tech Angular Developer - Powered by iFood",
      "Orange Tech + BackEnd",
      "Potência Tech powered by iFood | Data Science with Python",
      "AWS Cloud Bootcamp",
      "Discover AWS Cloud - Nexa Resources",
      "Java Development with AWS Cloud",
      "Potência Tech iFood - Game Development",
      "Banco PAN Java Developer",
      "Microsoft Dynamics 365 Bootcamp",
      "Santander 2024 - Backend with Java"
    ]
  }
};

const Courses = ({ language }) => {
  const translation = translations[language];

  return (
    <section className='cources'>
      <h2>{translation.title}</h2>
      <ul>
        {translation.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;

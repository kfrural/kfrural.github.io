import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Formação',
    course1: {
      name: 'Ciência da Computação',
      school: 'Instituto Federal da Educação, Ciência e Tecnologia do Sudeste de Minas',
      date: 'Março, 2023 - cursando'
    },
    course2: {
      name: 'Engenharia de Software',
      school: 'Estácio',
      date: 'Julho, 2022 - cursando'
    }
  },
  en: {
    title: 'Education',
    course1: {
      name: 'Computer Science',
      school: 'Federal Institute of Education, Science and Technology of Southeastern Minas Gerais',
      date: 'March, 2023 - ongoing'
    },
    course2: {
      name: 'Software Engineering',
      school: 'Estácio',
      date: 'July, 2022 - ongoing'
    }
  }
};

const Formation = ({ language }) => {
  const translation = translations[language];

  return (
    <section className="formation-section">
      <h2>{translation.title}</h2>
      <ul>
        <li>
          <h3>{translation.course1.name}</h3>
          <h4>{translation.course1.school}</h4>
          <p>{translation.course1.date}</p>
        </li>
        <li>
          <h3>{translation.course2.name}</h3>
          <h4>{translation.course2.school}</h4>
          <p>{translation.course2.date}</p>
        </li>
      </ul>
    </section>
  );
}

export default Formation;

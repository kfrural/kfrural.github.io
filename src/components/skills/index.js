import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Soft Skills',
    skills: [
      "Comunicação Efetiva",
      "Trabalho em Equipe",
      "Resolução de Problemas",
      "Adaptabilidade",
      "Pensamento Crítico",
      "Gestão do Tempo",
      "Liderança",
      "Colaboração",
      "Empatia",
      "Criatividade"
    ]
  },
  en: {
    title: 'Soft Skills',
    skills: [
      "Effective Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Critical Thinking",
      "Time Management",
      "Leadership",
      "Collaboration",
      "Empathy",
      "Creativity"
    ]
  }
};

const SkillsComponent = ({ language }) => {
  const translation = translations[language];

  return (
    <div className="skills">
      <div>
        <h2>{translation.title}</h2>
        <ul>
          {translation.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsComponent;

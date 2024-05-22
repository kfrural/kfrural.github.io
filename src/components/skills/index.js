import React from 'react';
import './style.css';

const SkillsComponent = () => {

    const softSkills = [
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
    ];
  
    return (
      <div className="skills">
        <div>
          <h2>Soft Skills</h2>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default SkillsComponent;
  
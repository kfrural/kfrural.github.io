import React from 'react';
import './style.css';

const Hobbies = () => {
  const interestsByCategory = {
    "Desenvolvimento": [
      {
        title: "Desenvolvimento de APIs",
        description: "Explorar e criar interfaces de programação de aplicativos eficientes e escaláveis."
      },
      {
        title: "Otimização de Consultas SQL",
        description: "Aperfeiçoar consultas SQL para melhorar o desempenho e a eficiência das operações de banco de dados."
      },
      {
        title: "Desenvolvimento Ágil e Scrum",
        description: "Aplicar metodologias ágeis como Scrum para gerenciar projetos de desenvolvimento de software de forma eficiente."
      }
    ],
    "Infraestrutura": [
      {
        title: "DevOps e Automação de Infraestrutura",
        description: "Implementar práticas de DevOps para automatizar a infraestrutura de TI e acelerar o ciclo de desenvolvimento."
      },
      {
        title: "Cloud Computing",
        description: "Utilizar serviços de computação em nuvem para escalabilidade, flexibilidade e disponibilidade de sistemas."
      }
    ],
    "Segurança": [
      {
        title: "Segurança de Dados",
        description: "Garantir a proteção e integridade dos dados por meio de práticas de segurança robustas e atualizadas."
      },
      {
        title: "Segurança Cibernética",
        description: "Aprofundar os conhecimentos em segurança cibernética para proteger sistemas e dados contra ameaças digitais."
      }
    ],
    "Análise de Dados": [
      {
        title: "Machine Learning e Análise de Dados",
        description: "Explorar técnicas de machine learning para análise preditiva e descoberta de insights em conjuntos de dados."
      },
      {
        title: "Análise de Desempenho e Otimização de Aplicações",
        description: "Identificar gargalos de desempenho em aplicações e otimizá-las para melhor eficiência."
      },
      {
        title: "Mineração de Dados e Big Data",
        description: "Explorar técnicas de mineração de dados e lidar com grandes volumes de dados para identificar padrões e tendências significativas."
      }
    ],
    "Gestão de Projetos": [
      {
        title: "Gestão de Projetos de TI",
        description: "Adquirir habilidades em gestão de projetos para liderar equipes e entregar projetos dentro do prazo e orçamento estabelecidos."
      }
    ]
  };

  return (
    <div className="backend-interests-hobbies">
      <h2>Interesses e Hobbies</h2>
      {Object.keys(interestsByCategory).map((category, index) => (
        <div key={index}>
          <h3>{category}</h3>
          <ul>
            {interestsByCategory[category].map((item, idx) => (
              <li key={idx}>
                <div className="interest-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Hobbies;

import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Interesses e Hobbies',
    categories: {
      "Desenvolvimento": "Desenvolvimento",
      "Infraestrutura": "Infraestrutura",
      "Segurança": "Segurança",
      "Análise de Dados": "Análise de Dados",
      "Gestão de Projetos": "Gestão de Projetos"
    },
    interestsByCategory: {
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
    }
  },
  'en': {
    title: 'Interests and Hobbies',
    categories: {
      "Desenvolvimento": "Development",
      "Infraestrutura": "Infrastructure",
      "Segurança": "Security",
      "Análise de Dados": "Data Analysis",
      "Gestão de Projetos": "Project Management"
    },
    interestsByCategory: {
      "Desenvolvimento": [
        {
          title: "API Development",
          description: "Explore and create efficient and scalable application programming interfaces."
        },
        {
          title: "SQL Query Optimization",
          description: "Enhance SQL queries to improve database operation performance and efficiency."
        },
        {
          title: "Agile Development and Scrum",
          description: "Apply agile methodologies like Scrum to efficiently manage software development projects."
        }
      ],
      "Infraestrutura": [
        {
          title: "DevOps and Infrastructure Automation",
          description: "Implement DevOps practices to automate IT infrastructure and accelerate development cycles."
        },
        {
          title: "Cloud Computing",
          description: "Utilize cloud computing services for system scalability, flexibility, and availability."
        }
      ],
      "Segurança": [
        {
          title: "Data Security",
          description: "Ensure data protection and integrity through robust and up-to-date security practices."
        },
        {
          title: "Cybersecurity",
          description: "Deepen knowledge in cybersecurity to protect systems and data against digital threats."
        }
      ],
      "Análise de Dados": [
        {
          title: "Machine Learning and Data Analysis",
          description: "Explore machine learning techniques for predictive analysis and insights discovery in data sets."
        },
        {
          title: "Performance Analysis and Application Optimization",
          description: "Identify performance bottlenecks in applications and optimize them for better efficiency."
        },
        {
          title: "Data Mining and Big Data",
          description: "Explore data mining techniques and handle large data volumes to identify significant patterns and trends."
        }
      ],
      "Gestão de Projetos": [
        {
          title: "IT Project Management",
          description: "Acquire project management skills to lead teams and deliver projects within established deadlines and budgets."
        }
      ]
    }
  }
};

const Hobbies = ({ language }) => {
  const translation = translations[language];

  return (
    <div className="backend-interests-hobbies">
      <h2>{translation.title}</h2>
      {Object.keys(translation.categories).map((category, index) => (
        <div key={index}>
          <h3>{translation.categories[category]}</h3>
          <ul>
            {translation.interestsByCategory[category].map((item, idx) => (
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

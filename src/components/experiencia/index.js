import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Experiência',
    experiences: [
      {
        company: 'Esteio Gestão Agropecuária',
        position: 'Estagiária em Desenvolvimento Mobile',
        type: 'Estágio',
        date: 'Janeiro 2025 - Presente',
        location: 'Viçosa, Minas Gerais, Brasil',
        description: 'Desenvolvimento de <strong>aplicativos móveis</strong> para agropecuária, focando em soluções práticas para produtores rurais. Implementação de funcionalidades para gestão agropecuária, incluindo <strong>análise</strong>, <strong>desenvolvimento</strong>, <strong>homologação</strong> e <strong>testes</strong>.'
      },
      {
        company: 'EmComp - Empresa Júnior da Computação',
        position: 'Coordenadora de Projetos',
        type: 'Tempo Integral',
        date: 'Maio de 2023 - Presente',
        location: 'Rio Pomba, Minas Gerais, Brasil',
        description: 'Coordenação de projetos na EmComp, <strong>liderando equipes de desenvolvimento</strong> e <strong>gerenciando soluções tecnológicas</strong> para clientes e parceiros da empresa júnior.'
      },
      {
        company: 'PET - Programa de Educação Tutorial',
        position: 'Aluna Pesquisadora',
        type: 'Meio Período',
        date: 'Outubro 2023 - Presente',
        location: 'Rio Pomba, Minas Gerais, Brasil',
        description: 'Participação como aluna pesquisadora no PET, <strong>desenvolvendo projetos de pesquisa acadêmica</strong> e contribuindo para o programa.'
      },
    ]
  },
  en: {
    title: 'Experience',
    experiences: [
      {
        company: 'Esteio Gestão Agropecuária',
        position: 'Mobile Development Intern',
        type: 'Internship',
        date: 'January 2025 - Present',
        location: 'Viçosa, Minas Gerais, Brazil',
        description: 'Development of <strong>mobile apps</strong> for agribusiness, focusing on practical solutions for rural producers. Implementation of agribusiness management features, including <strong>analysis</strong>, <strong>development</strong>, <strong>validation</strong> and <strong>tests</strong>.'
      },
      {
        company: 'EmComp - Computer Science Junior Company',
        position: 'Project Coordinator',
        type: 'Full-Time',
        date: 'May 2023 - Present',
        location: 'Rio Pomba, Minas Gerais, Brazil',
        description: 'Project coordination at EmComp, <strong>leading development teams</strong> and <strong>managing technological solutions</strong> for clients and partners of the junior company.'
      },
      {
        company: 'PET - Tutorial Education Program',
        position: 'Research Student',
        type: 'Half-Time',
        date: 'October 2023 - Present',
        location: 'Rio Pomba, Minas Gerais, Brazil',
        description: 'Participation as research student in PET, <strong>developing academic research projects</strong>  and contributing to the program.'
      }
    ]
  }
};

const Experience = ({ language }) => {
  const translation = translations[language];
  
  return (
    <section id='experience' className="experience-section">
      <h2>{translation.title}</h2>
      <ul>
        {translation.experiences.map((experience, index) => (
          <li key={index}>
            <h3>{experience.company}</h3>
            <p className="position">{experience.position}</p>
            <p>{experience.type}</p>
            <p>{experience.date}</p>
            <p>{experience.location}</p>
            <p dangerouslySetInnerHTML={{ __html: experience.description }} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
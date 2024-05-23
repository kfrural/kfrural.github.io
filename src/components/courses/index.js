import React from 'react';
import './style.css';

const Courses = () => {
    const courses = [
      "CC50: Introdução à Ciência da Computação - O Curso de Harvard, no Brasil",
      "Formação Cybersecurity Specialist",
      "Formação Linux Fundamentals",
      "Formação React Developer",
      "Aceleração Internacional DIO - Integrating SQL Databases with Python and MongoDB",
      "Potência Tech Angular Developer - Powered by iFood",
      "Orange Tech + BackEnd",
      "Potência Tech powered by iFood | Ciências de Dados com Python",
      "Bootcamp Cloud AWS",
      "Descubra a Nuvem AWS - Nexa Resources",
      "Desenvolvimento Java com Cloud AWS",
      "Potência Tech iFood - Desenvolvimento de Jogos",
      "Banco PAN Java Developer ",
      "Bootcamp Microsoft Dynamics 365 "
    ];
  
    return (
      <section className='cources'>
        <h2>Cursos</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>
    );
  }
  

export default Courses;
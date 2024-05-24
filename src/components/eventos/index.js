import React from 'react';
import './style.css';
import pif_paf from '../../assets/hackathonPifPaf.png';

const translations = {
  'pt-BR': {
    title: 'Eventos',
    events: [
      {
        title: "Hackathon em parceria com a Pif Paf Alimentos",
        image: pif_paf,
        description: "Participei do Hackathon em parceria com a Pif Paf Alimentos e foi uma experiência muito interessante! Este evento reuniu desenvolvedores, designers e entusiastas da tecnologia, onde pudemos colaborar e criar soluções inovadoras para problemas reais. Foi uma ótima oportunidade para aprender novas coisas e contribuir para um projeto que tem um grande impacto. Trabalhar com pessoas de diferentes áreas foi muito enriquecedor, aprendi a valorizar a diversidade de ideias e a importância da comunicação eficaz. O desafio de resolver um problema complexo em um curto período de tempo foi muito bom para o meu desenvolvimento. Aprendi muito sobre o processo de desenvolvimento de produtos, desde a ideia inicial até a implementação e teste. Este foi um evento muito gratificante e estou ansioso para participar de mais hackathons no futuro. Se você também está interessado em participar de eventos como este, recomendo fortemente!"
      }
    ]
  },
  'en': {
    title: 'Events',
    events: [
      {
        title: "Hackathon in partnership with Pif Paf Alimentos",
        image: pif_paf,
        description: "I participated in the Hackathon in partnership with Pif Paf Alimentos and it was a very interesting experience! This event brought together developers, designers, and technology enthusiasts, where we could collaborate and create innovative solutions for real problems. It was a great opportunity to learn new things and contribute to a project that has a significant impact. Working with people from different areas was very enriching, I learned to value the diversity of ideas and the importance of effective communication. The challenge of solving a complex problem in a short period of time was very beneficial for my development. I learned a lot about the product development process, from the initial idea to implementation and testing. This was a very rewarding event and I look forward to participating in more hackathons in the future. If you are also interested in participating in events like this, I highly recommend it!"
      }
    ]
  }
};

const Event = ({ language }) => {
  const translation = translations[language];
  const events = translation.events;

  return (
    <section id='eventos' className='events'>
      <h2>{translation.title}</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <img src={event.image} alt='Foto do Hackathon' className='imgEvent' />
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Event;

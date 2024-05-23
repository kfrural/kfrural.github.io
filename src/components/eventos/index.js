import React from 'react';
import './style.css';
import pif_paf from '../../assets/hackathonPifPaf.png';

const Event = () => {
  const events = [
    {
      title: "Hackathon em parceria com a Pif Paf Alimentos",
      image: pif_paf,
      description: "Participei do Hackathon em parceria com a Pif Paf Alimentos e foi uma experiência muito interessante! Este evento reuniu desenvolvedores, designers e entusiastas da tecnologia, onde pudemos colaborar e criar soluções inovadoras para problemas reais. Foi uma ótima oportunidade para aprender novas coisas e contribuir para um projeto que tem um grande impacto. Trabalhar com pessoas de diferentes áreas foi muito enriquecedor, aprendi a valorizar a diversidade de ideias e a importância da comunicação eficaz. O desafio de resolver um problema complexo em um curto período de tempo foi muito bom para o meu desenvolvimento. Aprendi muito sobre o processo de desenvolvimento de produtos, desde a ideia inicial até a implementação e teste. Este foi um evento muito gratificante e estou ansioso para participar de mais hackathons no futuro. Se você também está interessado em participar de eventos como este, recomendo fortemente!"
    }
  ];

  return (
    <section id='eventos' className='events'>
      <h2>Eventos</h2>
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

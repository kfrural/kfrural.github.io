import React from 'react';
import './style.css';

const translations = {
  'pt-BR': {
    title: 'Olá! 👋 Sou a Karla Ferreira 👩🏻‍💻🤠',
    paragraph1: 'Sou uma estudante apaixonada por tecnologia e programação. Atualmente, estou cursando <strong>Ciência da Computação</strong> e <strong>Engenharia de Software</strong>, com um profundo interesse em duas áreas distintas, porém complementares: automação e desenvolvimento de sistemas, bem como dados e análise.',
    paragraph2: 'Na área de <strong>automação e desenvolvimento de sistemas</strong>, tenho me dedicado a aprimorar minhas habilidades em programação, visando criar soluções eficientes e inovadoras. Acredito firmemente no poder da tecnologia para transformar o mundo e estou ansiosa para desempenhar um papel ativo nessa transformação.',
    paragraph3: 'Por outro lado, meu interesse pela área de <strong>dados e análise</strong> tem me motivado a dedicar grande parte do meu tempo e esforço para aprimorar minhas habilidades nesse campo. Acredito no poder dos dados para impulsionar a inovação e a tomada de decisões informadas. Estou entusiasmada com a possibilidade de desempenhar um papel ativo na revolução dos dados e ansiosa para embarcar nessa jornada de descoberta e transformação.',
    paragraph4: 'Ao longo da minha jornada acadêmica, tenho buscado constantemente oportunidades para aplicar meus conhecimentos em projetos práticos e desafios reais. <strong>Participei de hackathons, desenvolvi aplicativos e contribuí para projetos open source</strong>, sempre com o objetivo de expandir meu conhecimento e contribuir para a comunidade.',
    paragraph5: 'Além disso, acredito na importância da colaboração e do trabalho em equipe. Gosto de interagir com pessoas de diferentes backgrounds e aprender com elas. Estou sempre aberta a novas ideias e perspectivas, pois acredito que é através do diálogo e da troca de conhecimentos que podemos alcançar os melhores resultados.',
    paragraph6: 'Em resumo, sou uma estudante dedicada, curiosa e apaixonada por tecnologia, com um forte interesse em <strong>automação</strong>, <strong>desenvolvimento de sistemas</strong> e <strong>análise de dados</strong>. Estou ansiosa para continuar minha jornada de aprendizado e crescimento, e espero ter a oportunidade de contribuir para a transformação do mundo através da tecnologia.'
  },
  en: {
    title: 'Hello! 👋 I\'m Karla Ferreira 👩🏻‍💻🤠',
    paragraph1: 'I am a student passionate about technology and programming. Currently, I am studying <strong>Computer Science</strong> and <strong>Software Engineering</strong>, with a deep interest in two distinct but complementary areas: automation and system development, as well as data and analysis.',
    paragraph2: 'In the area of <strong>automation and system development</strong>, I have dedicated myself to improving my programming skills, aiming to create efficient and innovative solutions. I firmly believe in the power of technology to transform the world, and I am eager to play an active role in this transformation.',
    paragraph3: 'On the other hand, my interest in the field of <strong>data and analysis</strong> has motivated me to devote a large part of my time and effort to improving my skills in this area. I believe in the power of data to drive innovation and informed decision-making. I am excited about the possibility of playing an active role in the data revolution and eager to embark on this journey of discovery and transformation.',
    paragraph4: 'Throughout my academic journey, I have constantly sought opportunities to apply my knowledge to practical projects and real-world challenges. <strong>I have participated in hackathons, developed applications, and contributed to open-source projects</strong>, always with the goal of expanding my knowledge and contributing to the community.',
    paragraph5: 'Furthermore, I believe in the importance of collaboration and teamwork. I enjoy interacting with people from different backgrounds and learning from them. I am always open to new ideas and perspectives, as I believe that it is through dialogue and the exchange of knowledge that we can achieve the best results.',
    paragraph6: 'In summary, I am a dedicated, curious, and technology-passionate student, with a strong interest in <strong>automation</strong>, <strong>system development</strong>, and <strong>data analysis</strong>. I am eager to continue my journey of learning and growth, and I hope to have the opportunity to contribute to the transformation of the world through technology.'
  }
};

const About = ({ language }) => {
  const translation = translations[language];

  return (
    <section id='about' className='about'>
      <h2>{translation.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph1 }} />
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph2 }} />
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph3 }} />
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph4 }} />
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph5 }} />
      <p dangerouslySetInnerHTML={{ __html: translation.paragraph6 }} />
    </section>
  );
}

export default About;

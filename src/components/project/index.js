import React from 'react';
import './style.css';
import appBovino from '../../assets/telaAppBovino.jpg';
import projAmeaca from '../../assets/projAmeaca.png';
import chess from '../../assets/chess.png';
import velha from '../../assets/velha.png';
import analise_leite from '../../assets/Analise_leite.png';
import churn from '../../assets/churn-prediction.png';

const translations = {
  'pt-BR': {
    title: 'Meus Projetos',
    projects: [
      {
        title: 'Aplicativo Mobile para Gerenciamento de Bovinos em Propriedades Rurais',
        description: 'O projeto "Aplicativo Mobile para Gerenciamento de Bovinos em Propriedades Rurais: Uma Ferramenta Eficaz para Melhorar a Produção" é uma solução inovadora destinada a auxiliar pequenos e médios produtores rurais na gestão eficiente de suas propriedades. O sistema oferece funcionalidades intuitivas e práticas, como cadastramento de lotes, calendário de eventos, conversão de peso, calculadora de rações e controle financeiro. Essas ferramentas visam otimizar a produção pecuária, facilitando o acompanhamento de vacinas, reprodução, alimentação e transações financeiras. Com um design simples e amigável, o aplicativo promete simplificar o dia a dia dos produtores, melhorando a tomada de decisões e aumentando a rentabilidade das propriedades rurais.',
        link: 'https://github.com/kfrural/Projeto_gerenciaBov'
      },
      {
        title: 'Previsão do Churn do Cliente',
        description: 'Este projeto visa prever a rotatividade de clientes para uma empresa de telecomunicações usando técnicas de aprendizado de máquina. Ao alavancar duas metodologias, CRISP-DM e KDD, garantimos uma abordagem estruturada e perspicaz para o processo de mineração de dados. O projeto inclui pré-processamento de dados, engenharia de recursos, modelagem e fases de avaliação, e é suportado por um painel implantável para apresentar os resultados.',
        link: 'https://github.com/kfrural/customer-churn-prediction'
      },
      {
        title: 'Sistema de Monitoramento de Ameaças Cibernéticas',
        description: 'Desenvolvi, como parte do projeto Backdrop Build, um Sistema de Monitoramento de Ameaças Cibernéticas, uma aplicação intuitiva e robusta para detectar, registrar e analisar ameaças no ambiente digital. Com recursos de registro detalhado, filtragem avançada e visualização gráfica, a plataforma oferece uma visão abrangente do panorama de segurança cibernética. Projetado para facilitar a gestão proativa de ameaças, o sistema proporciona maior segurança digital para organizações e profissionais de segurança.',
        link: 'https://github.com/kfrural/CyberThreatsMonitoringSystem'
      },
      {
        title: 'Análise da Produção de Leite no Brasil',
        description: 'Este projeto é um sistema de análise de dados para a produção de leite no Brasil, utilizando dados históricos para criar uma interface gráfica interativa que permite aos usuários visualizar e explorar diferentes aspectos da produção leiteira. Com dados sobre a produção total, por região e por estado, o sistema fornece uma visão abrangente da evolução da produção leiteira no país, permitindo análises detalhadas e previsões futuras.',
        link: 'https://github.com/kfrural/analise_prod_Leite_Br'
      },
      {
        title: 'Jogo de Xadrez',
        description: 'Este projeto é uma implementação simples de um jogo de xadrez em console, onde dois jogadores podem competir em partidas emocionantes. Com uma interface intuitiva, os jogadores podem selecionar e mover suas peças pelo tabuleiro, seguindo as regras tradicionais do xadrez. O sistema valida os movimentos das peças, garantindo uma experiência de jogo autêntica e desafiadora. Ideal para entusiastas do xadrez em busca de diversão e prática estratégica.',
        link: 'https://github.com/kfrural/xadrezinho'
      },
      {
        title: 'Jogo da Velha',
        description: 'Este é um projeto de implementação do clássico jogo da velha para console. Os jogadores podem competir entre si para marcar três de suas peças em linha horizontal, vertical ou diagonal. Com uma interface simples, os jogadores alternam entre escolher uma posição no tabuleiro para colocar suas peças "X" ou "O". O sistema valida as jogadas, verifica se há um vencedor ou se o jogo terminou em empate, proporcionando uma experiência de jogo nostálgica e divertida.',
        link: 'https://github.com/kfrural/TicTacToe'
      },
    ]
  },
  'en': {
    title: 'My Projects',
    projects: [
      {
        title: 'Mobile App for Cattle Management in Rural Properties',
        description: 'The project "Mobile App for Cattle Management in Rural Properties: An Effective Tool to Improve Production" is an innovative solution designed to assist small and medium-sized rural producers in efficiently managing their properties. The system offers intuitive and practical features, such as lot registration, event calendar, weight conversion, ration calculator, and financial control. These tools aim to optimize cattle production, facilitating the monitoring of vaccines, reproduction, feeding, and financial transactions. With a simple and user-friendly design, the app promises to simplify the daily lives of producers, improving decision-making and increasing the profitability of rural properties.',
        link: 'https://github.com/kfrural/Projeto_gerenciaBov'
      },
      {
        title: 'Customer Churn Prediction',
        description: 'This project aims to predict customer churn for a telecom company using machine learning techniques. By leveraging two methodologies, CRISP-DM and KDD, we ensure a structured and insightful approach to the data mining process. The project includes data preprocessing, feature engineering, modeling, and evaluation phases, and is supported by a deployable dashboard for presenting the results.',
        link: 'https://github.com/kfrural/customer-churn-prediction'
      },
      {
        title: 'Cyber Threat Monitoring System',
        description: 'As part of the Backdrop Build project, I developed a Cyber Threat Monitoring System, an intuitive and robust application to detect, record, and analyze threats in the digital environment. With detailed logging, advanced filtering, and graphical visualization features, the platform offers a comprehensive view of the cybersecurity landscape. Designed to facilitate proactive threat management, the system provides greater digital security for organizations and security professionals.',
        link: 'https://github.com/kfrural/CyberThreatsMonitoringSystem'
      },
      {
        title: 'Analysis of Milk Production in Brazil',
        description: 'This project is a data analysis system for milk production in Brazil, utilizing historical data to create an interactive graphical interface that allows users to visualize and explore different aspects of milk production. With data on total production, by region and by state, the system provides a comprehensive view of the evolution of milk production in the country, enabling detailed analyses and future predictions.',
        link: 'https://github.com/kfrural/analise_prod_Leite_Br'
      },
      {
        title: 'Chess Game',
        description: 'This project is a simple implementation of a console-based chess game, where two players can compete in exciting matches. With an intuitive interface, players can select and move their pieces across the board, following the traditional rules of chess. The system validates the piece movements, ensuring an authentic and challenging gaming experience. Ideal for chess enthusiasts seeking fun and strategic practice.',
        link: 'https://github.com/kfrural/xadrezinho'
      },
      {
        title: 'Tic Tac Toe Game',
        description: 'This is a project implementing the classic Tic Tac Toe game for the console. Players can compete against each other to mark three of their pieces in a horizontal, vertical, or diagonal line. With a simple interface, players take turns choosing a position on the board to place their "X" or "O" pieces. The system validates the moves, checks for a winner or if the game ends in a tie, providing a nostalgic and entertaining gaming experience.',
        link: 'https://github.com/kfrural/TicTacToe'
      },
    ]
  }
};

const Project = ({ language }) => {
  const translation = translations[language];
  const projects = translation.projects;

  return (
    <section id='projetos' className='projetos'>
      <h2>{translation.title}</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <div className="imgText">
              <img src={index === 0 ? appBovino : index === 1 ? churn : index === 2 ? projAmeaca : index === 3 ? analise_leite : index === 4 ? chess : velha } alt='Imagem do projeto' className='imgProjet' />
              <p>{project.description}</p>
            </div>
            <a href={project.link}>{language === 'pt-BR' ? 'Clique aqui para ver o projeto' : 'Click here to see the project'}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Project;

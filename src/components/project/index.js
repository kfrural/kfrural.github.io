import React from 'react';
import './style.css';
import appBovino from '../../assets/telaAppBovino.jpg';
import projAmeaca from '../../assets/projAmeaca.png';
import chess from '../../assets/chess.png';
import velha from '../../assets/velha.png';

const Project = () => {
  return (
    <section id='projetos' className='projetos'>
      <h2>Meus Projetos</h2>
      <ul>
        <li>
          <h3>Aplicativo Mobile para Gerenciamento de Bovinos em Propriedades Rurais</h3>
          <div class="imgText">
            <img src={appBovino} alt='Imagem do projeto' className='imgProjet' />
            <p>O projeto "Aplicativo Mobile para Gerenciamento de Bovinos em Propriedades
              Rurais: Uma Ferramenta Eficaz para Melhorar a Produção" é uma solução
              inovadora destinada a auxiliar pequenos e médios produtores rurais na
              gestão eficiente de suas propriedades. O sistema oferece funcionalidades
              intuitivas e práticas, como cadastramento de lotes, calendário de eventos,
              conversão de peso, calculadora de rações e controle financeiro. Essas
              ferramentas visam otimizar a produção pecuária, facilitando o acompanhamento
              de vacinas, reprodução, alimentação e transações financeiras. Com um design
              simples e amigável, o aplicativo promete simplificar o dia a dia dos
              produtores, melhorando a tomada de decisões e aumentando a rentabilidade
              das propriedades rurais.</p>
          </div>
          <a href="https://github.com/kfrural/Projeto_gerenciaBov">Clique aqui para ver o projeto</a>
        </li>

        <li>
          <h3>Sistema de Monitoramento de Ameaças Cibernéticas</h3>
          <div class="imgText">
            <img src={projAmeaca} alt='Imagem do projeto' className='imgProjet' />
            <p>Desenvolvi, como parte do projeto Backdrop Build, um Sistema de Monitoramento
              de Ameaças Cibernéticas, uma aplicação intuitiva e robusta para detectar, registrar
              e analisar ameaças no ambiente digital. Com recursos de registro detalhado, filtragem
              avançada e visualização gráfica, a plataforma oferece uma visão abrangente do
              panorama de segurança cibernética. Projetado para facilitar a gestão proativa de
              ameaças, o sistema proporciona maior segurança digital para organizações e
              profissionais de segurança.</p>
          </div>
          <a href="https://github.com/kfrural/CyberThreatsMonitoringSystem">Clique aqui para ver o projeto</a>
        </li>

        <li>
          <h3>Jogo de Xadrez</h3>
          <div class="imgText">
            <img src={chess} alt='Imagem do projeto' className='imgProjet' />
            <p>Este projeto é uma implementação simples de um jogo de xadrez em console, onde dois jogadores
              podem competir em partidas emocionantes. Com uma interface intuitiva, os jogadores podem
              selecionar e mover suas peças pelo tabuleiro, seguindo as regras tradicionais do xadrez. O
              sistema valida os movimentos das peças, garantindo uma experiência de jogo autêntica e
              desafiadora. Ideal para entusiastas do xadrez em busca de diversão e prática estratégica.</p>
          </div>
          <a href="https://github.com/kfrural/xadrezinho">Clique aqui para ver o projeto</a>
        </li>

        <li>
          <h3>Jogo da Velha</h3>
          <div class="imgText">
            <img src={velha} alt='Imagem do projeto' className='imgProjet' />
            <p>Este é um projeto de implementação do clássico jogo da velha para console. Os jogadores podem
              competir entre si para marcar três de suas peças em linha horizontal, vertical ou diagonal. Com uma
              interface simples, os jogadores alternam entre escolher uma posição no tabuleiro para colocar suas
              peças 'X' ou 'O'. O sistema valida as jogadas, verifica se há um vencedor ou se o jogo terminou
              em empate, proporcionando uma experiência de jogo nostálgica e divertida.</p>
          </div>
          <a href="https://github.com/kfrural/TicTacToe">Clique aqui para ver o projeto</a>
        </li>

      </ul>
    </section>
  );
}

export default Project;
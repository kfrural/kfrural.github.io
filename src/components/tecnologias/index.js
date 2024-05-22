import React from 'react';
import './style.css';
import node from '../../assets/icons/node.png';
import sql from '../../assets/icons/sql.png';
import python from '../../assets/icons/python.png';
import nosql from '../../assets/icons/nosql.png';
import docker from '../../assets/icons/docker.png';
import git from '../../assets/icons/git.png';
import aws from '../../assets/icons/aws.png';
import API_REST from '../../assets/icons/API_REST.png';
import java from '../../assets/icons/java.png';
import cpp from '../../assets/icons/cpp.png';
import c from '../../assets/icons/c.png';
import js from '../../assets/icons/js.png';
import ts from '../../assets/icons/ts.png';
import react from '../../assets/icons/react.png';
import react_native from '../../assets/icons/react_native.png';
import expo from '../../assets/icons/expo.png';
import php from '../../assets/icons/php.png';
import mongoDb from '../../assets/icons/mongoDb.png';
import postgreSQL from '../../assets/icons/postgreSQL.png';

const Tecnologias = () => {
  
  const toolsTechnologies = [
    <img src={node} alt="Node.js" className="imgLogo" />,
    <img src={python} alt='Python' className="imgLogo" />,
    <img src={sql} alt='SQL' className="imgLogo" />,
    <img src={nosql} alt='NoSQL' className="imgLogo" />,
    <img src={docker} alt='Docker' className="imgLogo" />,
    <img src={git} alt='Git' className="imgLogo" />,
    <img src={aws} alt='AWS' className="imgLogo" />,
    <img src={API_REST} alt='RESTful APIs' className="imgLogo" />,
    <img src={java} alt='Java' className='imgLogo' />,
    <img src={cpp} alt='C++' className='imgLogo' />,
    <img src={c} alt='C' className='imgLogo' />,
    <img src={js} alt='JavaScript' className='imgLogo' />,
    <img src={ts} alt='TypeScript' className='imgLogo' />,
    <img src={react} alt='React' className='imgLogo' />,
    <img src={react_native} alt='React Native' className='imgLogo' />,
    <img src={expo} alt='Expo' className='imgLogo' />,
    <img src={php} alt='PHP' className='imgLogo' />,
    <img src={mongoDb} alt='MongoDB' className='imgLogo' />,
    <img src={postgreSQL} alt='PostgreSQL' className='imgLogo' />,
  ];

    return (
      <div className="tecnologias">
        <div>
          <h2>Ferramentas e Tecnologias</h2>
          <ul>
            {toolsTechnologies.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  export default Tecnologias;
  
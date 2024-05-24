import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Project from './components/project';
import About from './components/About';
import Experience from './components/experiencia';
import Formation from './components/formation';
import Hobbies from './components/hobbies';
import Courses from './components/courses';
import Event from './components/eventos';
import Hero from './components/hero';
import Tecnologias from './components/tecnologias';
import Skills from './components/skills';
import ContactComponent from './components/contact';
import Functions from './components/functions';

const App = () => {
  const [language, setLanguage] = useState('pt-BR');

  const handleLanguageChange = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <div>
      <Header language={language} setLanguage={setLanguage}/>
      <main>
        <Functions language={language} setLanguage={setLanguage} />
        <Hero language={language} setLanguage={setLanguage} />
        <About language={language} setLanguage={setLanguage}/>
        <Experience language={language} setLanguage={setLanguage}/>
        <Formation language={language} setLanguage={setLanguage}/>
        <Tecnologias language={language} setLanguage={setLanguage}/>
        <Skills language={language} setLanguage={setLanguage}/>
        <Hobbies language={language} setLanguage={setLanguage}/>
        <Project language={language} setLanguage={setLanguage}/>
        <Courses language={language} setLanguage={setLanguage}/>
        <Event language={language} setLanguage={setLanguage}/>
        <ContactComponent language={language} setLanguage={setLanguage}/>
      </main>
      <Footer language={language} setLanguage={setLanguage}/>
    </div>
  );
}

export default App;

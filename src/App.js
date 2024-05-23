import React from 'react';
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

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Formation />
        <Tecnologias />
        <Skills />
        <Hobbies />
        <Project />
        <Courses />
        <Event />
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;

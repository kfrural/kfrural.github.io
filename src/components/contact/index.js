import React, { useState } from 'react';
import './style.css';

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact" id='contato'>
      <div>
        <h2>Formulário de Contato</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <h2>Informações de Contato</h2>
        <p>E-mail: <a href="mailto:kferreira_@outlook.com?subject=Currículo Web&body=">kferreira_@outlook.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/karla-ferreira-rural/">karla-ferreira-rural</a></p>
        <p>GitHub: <a href="https://github.com/kfrural">kfrural</a></p>
        <p>Instagrem: <a href="https://www.instagram.com/kf.rural/">@kf.rural</a></p>
      </div>
    </div>
  );
}

export default ContactComponent;
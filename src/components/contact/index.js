import React, { useState } from 'react';
import './style.css';
import { supabase } from '../../service/supabase.js';

const translations = {
  'pt-BR': {
    title: 'Formulário de Contato',
    contactInfoTitle: 'Informações de Contato',
    nameLabel: 'Nome',
    emailLabel: 'E-mail',
    messageLabel: 'Mensagem',
    submitButton: 'Enviar',
    successMessage: 'Dados enviados com sucesso:',
    errorMessage: 'Erro ao enviar os dados:'
  },
  'en': {
    title: 'Contact Form',
    contactInfoTitle: 'Contact Information',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitButton: 'Submit',
    successMessage: 'Data sent successfully:',
    errorMessage: 'Error sending data:'
  }
};

const ContactComponent = ({ language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const translation = translations[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('contatos').insert([
        { nome: name, email, mensagem: message },
      ]);
      if (error) {
        throw error;
      }
      console.log(`${translation.successMessage} ${data}`);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(`${translation.errorMessage} ${error.message}`);
      alert(`${translation.errorMessage} ${error.message}`);
    }
  };

  return (
    <div className="contact" id='contato'>
      <div>
        <h2>{translation.title}</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={translation.nameLabel}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={translation.emailLabel}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder={translation.messageLabel}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">{translation.submitButton}</button>
        </form>
      </div>
      <div>
        <h2>{translation.contactInfoTitle}</h2>
        <p>E-mail: <a href="mailto:kferreira_@outlook.com?subject=Currículo Web&body=">kferreira_@outlook.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/karla-ferreira-rural/">karla-ferreira-rural</a></p>
        <p>GitHub: <a href="https://github.com/kfrural">kfrural</a></p>
        <p>Instagrem: <a href="https://www.instagram.com/kf.rural/">@kf.rural</a></p>
      </div>
    </div>
  );
}

export default ContactComponent;

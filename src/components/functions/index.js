import React from 'react';
import './style.css';

const Functions = ({ language, setLanguage }) => {
  const handleLanguageChange = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <div className="functions">
      <button onClick={handleLanguageChange}>
        {language === 'pt-BR' ? 'EN' : 'PT-BR'}
      </button>
    </div>
  );
};

export default Functions;

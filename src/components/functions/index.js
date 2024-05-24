import React, { useState } from 'react';
import './style.css';

const Functions = ({ language, setLanguage, theme, setTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleLanguageChange = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <div className={`functions ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={handleLanguageChange}>
        {language === 'pt-BR' ? 'English' : 'Português'}
      </button>
    </div>
  );
};

export default Functions;

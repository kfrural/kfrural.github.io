import React, { useState } from 'react';
import './style.css';

const Functions = ({ language, setLanguage, theme, setTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

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
        {language === 'pt-BR' ? 'EN' : 'PT-BR'}
      </button>
    </div>
  );
};

export default Functions;

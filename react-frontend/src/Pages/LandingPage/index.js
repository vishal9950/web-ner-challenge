import React, { useState } from 'react';
import Select from 'react-select';
import Header from '../../Components/Header';
import { getNERFromText, languageMap } from '../../helpers';
import './index.css';

function LandingPage() {
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState({ value: 'en', label: 'English' });

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  const handleGenerateNER = async () => {
    const res = await getNERFromText(input, language.value);
    console.log('in body-->', res);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="LandingPage-outer-container">
      <Header />
      <div className="LandingPage-container">
        <div className="LandingPage-input">
          <div className="LandingPage-select">
            <div className="LandingPage-input-text">
              Input text
            </div>
            <Select className="Language-select" value={language} onChange={handleLanguageChange} options={languageMap} />
          </div>
          <textarea placeholder="Here goes your input..." onChange={handleTextChange} value={input} className="LandingPage-input-box" />
        </div>
        <div className="LandingPage-button-container">
          <button onClick={handleGenerateNER} disabled={input.length === 0} className={input.length === 0 ? 'LandingPage-button-disabled' : 'LandingPage-button'} type="submit">Generate NER</button>
        </div>
        <div className="LandingPage-output">Named Entity Recognition</div>
      </div>
    </div>
  );
}

export default LandingPage;

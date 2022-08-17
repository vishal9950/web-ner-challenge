import React, { useState } from 'react';
import Header from '../../Components/Header';
import './index.css';

function LandingPage() {
  const [input, setInput] = useState('');

  const handleTextChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="LandingPage-outer-container">
      <Header />
      <div className="LandingPage-container">
        <div className="LandingPage-input">
          Input text
          <textarea onChange={handleTextChange} value={input} className="LandingPage-input-box" />
        </div>
        <div className="LandingPage-button-container">
          <button disabled={input.length === 0} className={input.length === 0 ? 'LandingPage-button-disabled' : 'LandingPage-button'} type="submit">Generate NER</button>
        </div>
        <div className="LandingPage-output">Named Entity Recognition</div>
      </div>
    </div>
  );
}

export default LandingPage;

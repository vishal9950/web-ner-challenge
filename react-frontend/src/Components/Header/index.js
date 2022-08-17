import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="Header-container">
      <div className="Header-title">Web-NER-Challenge @ ISI</div>
      <div className="Header-link">
        <a className="Header-link-text" target="_blank" href="https://linktr.ee/vishalvasnani" rel="noreferrer">
          <span>About Me</span>
          <span className="material-symbols-outlined Header-link-icon">
            open_in_new
          </span>
        </a>

      </div>
    </div>
  );
}

export default Header;

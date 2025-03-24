import React from 'react'

const Footer : React.FC = () => {
    return (
        <footer>
      <div className ="contact-info">
          <span><b>CRAN</b></span>
          <span> г.Иннополис</span>
          <span>
              +7 (993) 421-94-76
          </span>
          <span>
              cran.project@yandex.ru
          </span>
      </div>
      <span>
          © Copyright Cran Project All Rights Reserved
      </span>
      <a href="/" target="_blank" rel = "noopener noreferrer">
          Права
      </a>
  </footer>
    );
};
export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">© {currentYear} Ali Saad</p>
        <p className="footer-meta">Node.js · Express · MongoDB · React · AWS</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <img src="https://i.imgur.com/fzADqJo.png" alt="Logo" width="48" height="48" className="d-inline-block align-text-top" 
               style={{filter : "grayscale(100%)"}}/>
          <span className="ms-2">MyWebsite</span>
        </div>
        <div>
          <span>© 2025 ALOHA CLASS. All rights reserved.</span>
        </div>
        <div>
          <a href="https://instagram.com" className="me-3 text-dark" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" className="text-dark" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

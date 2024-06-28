import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-3" href="/">
            <img src="https://i.imgur.com/fzADqJo.png" alt="Logo" width="48" height="48" className="d-inline-block align-text-top" />
            <span>ALOHA CLASS</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/boards" className='nav-link'>Board</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className='nav-link'>About</Link>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="button">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

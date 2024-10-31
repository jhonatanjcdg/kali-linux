import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarlogo">
        <Link to="/">Kali Linux</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-icon-bar"></span>
        <span className="menu-icon-bar"></span>
        <span className="menu-icon-bar"></span>
      </div>
      <ul className={`navbarlinks ${isOpen ? 'navbarlinks-open' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/installKali">Tutorial</Link></li>
        <li><Link to="/history">Historia</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/content">Contenido</Link></li>
        <li><Link to="/authors">Autores</Link></li>
        <li><Link to="/contact">Comentarios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

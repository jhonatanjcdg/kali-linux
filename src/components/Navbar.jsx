import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarlogo">
        <Link to="/">Kali linux</Link>
      </div>
      <ul className="navbarlinks">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to='/installKali'>Tutorial</Link></li>
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

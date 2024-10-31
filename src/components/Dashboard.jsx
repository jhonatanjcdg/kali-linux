import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard de Kali Linux</h2>
      <p>Bienvenido al panel de control de Kali Linux.</p>
      
      <div className="dashboard-section">
        <h3>Resumen del Sistema</h3>
        <p>Versión de Kali Linux: 2024.1</p>
        <p>Uso de CPU: 15%</p>
        <p>Memoria Utilizada: 2.5 GB / 8 GB</p>
        <p>Almacenamiento Disponible: 120 GB / 256 GB</p>
      </div>
      
      <div className="dashboard-section">
        <h3>Herramientas de Seguridad</h3>
        <ul>
          <li>Nmap - Escaneo de redes</li>
          <li>Metasploit - Pruebas de penetración</li>
          <li>Wireshark - Análisis de tráfico de red</li>
          <li>John the Ripper - Cracking de contraseñas</li>
          <li>Burp Suite - Pruebas de seguridad web</li>
          <li>Hydra - Ataques de fuerza bruta</li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h3>Actualizaciones y Noticias</h3>
        <p>No hay actualizaciones disponibles.</p>
        <p>Últimas noticias: Nueva vulnerabilidad descubierta en XYZ.</p>
      </div>
      
      <div className="dashboard-section">
        <h3>Tutoriales y Documentación</h3>
        <ul>
          <li><a href="https://www.kali.org/docs/">Documentación Oficial de Kali Linux</a></li>
          <li><a href="https://www.kali.org/tutorials/">Tutoriales de Kali Linux</a></li>
          <li><a href="https://www.offensive-security.com/metasploit-unleashed/">Guía de Metasploit</a></li>
          <li><a href="https://nmap.org/book/man.html">Manual de Nmap</a></li>
          <li><a href="https://www.wireshark.org/docs/">Documentación de Wireshark</a></li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h3>Alertas de Seguridad</h3>
        <p>No hay alertas de seguridad en este momento.</p>
      </div>
      
      <div className="dashboard-section">
        <h3>Foros y Comunidad</h3>
        <ul>
          <li><a href="https://forums.kali.org/">Foros de Kali Linux</a></li>
          <li><a href="https://www.reddit.com/r/Kalilinux/">Reddit - Kali Linux</a></li>
          <li><a href="https://www.offensive-security.com/">Offensive Security</a></li>
          <li><a href="https://www.blackhat.com/">Black Hat</a></li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h3>Proyectos y Scripts</h3>
        <p>Accede a proyectos y scripts útiles para tus pruebas de penetración:</p>
        <ul>
          <li><a href="https://github.com/rapid7/metasploit-framework">Metasploit Framework</a></li>
          <li><a href="https://github.com/sqlmapproject/sqlmap">SQLMap - Inyección SQL</a></li>
          <li><a href="https://github.com/aircrack-ng/aircrack-ng">Aircrack-ng - Seguridad WiFi</a></li>
          <li><a href="https://github.com/OWASP/ZAP">OWASP ZAP - Pruebas de seguridad web</a></li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h3>Eventos y Conferencias</h3>
        <p>Participa en eventos y conferencias de seguridad informática:</p>
        <ul>
          <li><a href="https://www.defcon.org/">DEF CON</a></li>
          <li><a href="https://www.blackhat.com/">Black Hat</a></li>
          <li><a href="https://www.rsaconference.com/">RSA Conference</a></li>
          <li><a href="https://www.shmoocon.org/">ShmooCon</a></li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h3>Recursos de Aprendizaje</h3>
        <p>Mejora tus habilidades con estos recursos de aprendizaje:</p>
        <ul>
          <li><a href="https://www.cybrary.it/">Cybrary</a></li>
          <li><a href="https://www.udemy.com/">Udemy - Cursos de Seguridad Informática</a></li>
          <li><a href="https://www.coursera.org/">Coursera - Cursos de Ciberseguridad</a></li>
          <li><a href="https://www.edx.org/">edX - Cursos de Seguridad Informática</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

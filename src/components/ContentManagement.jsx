import React, { useState } from 'react';
import './content-management.css';

const ContentManagement = () => {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState('');

  const handleAddContent = () => {
    setContent([...content, newContent]);
    setNewContent('');
  };

  return (
    <div className="contentmanagement">
      <h2>Gestión de Contenido</h2>
      <input 
        type="text" 
        value={newContent} 
        onChange={(e) => setNewContent(e.target.value)} 
        placeholder="Nuevo contenido" 
      />
      <button onClick={handleAddContent}>Agregar</button>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <div className="contentsection">
        <h3>Artículos y Tutoriales</h3>
        <ul>
          <li><a href="#">Introducción a Kali Linux</a></li>
          <li><a href="#">Cómo usar Nmap para escaneo de redes</a></li>
          <li><a href="#">Pruebas de penetración con Metasploit</a></li>
        </ul>
      </div>
      
      <div className="contentsection">
        <h3>Recursos Descargables</h3>
        <ul>
          <li><a href="#">Scripts de automatización</a></li>
          <li><a href="#">Configuraciones de herramientas</a></li>
          <li><a href="#">Documentos de referencia</a></li>
        </ul>
      </div>
      
      <div className="contentsection">
        <h3>Videos y Multimedia</h3>
        <ul>
          <li><a href="#">Video tutorial: Uso de Wireshark</a></li>
          <li><a href="#">Demostración: Cracking de contraseñas con John the Ripper</a></li>
        </ul>
      </div>
      
      <div className="contentsection">
        <h3>Documentación y Guías</h3>
        <ul>
          <li><a href="https://www.kali.org/docs/">Documentación Oficial de Kali Linux</a></li>
          <li><a href="https://www.kali.org/tutorials/">Tutoriales de Kali Linux</a></li>
        </ul>
      </div>
      
      <div className="contentsection">
        <h3>Comentarios y Feedback</h3>
        <p>Deja tus comentarios y feedback sobre los artículos y recursos.</p>
        {/* Aquí podrías implementar un sistema de comentarios */}
      </div>
    </div>
  );
};

export default ContentManagement;

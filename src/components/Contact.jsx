import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Formulario enviado:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Cometarios</h2>
      <p>Si tienes algún comentario, por favor dínoslo</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Mensaje" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      
      <div className="contact-info">
        <h3>Soporte Técnico</h3>
        <p>Para problemas técnicos con Kali Linux, visita nuestra <a href="https://www.kali.org/community/">página de soporte comunitario</a>.</p>
        
        <h3>Reportar un Problema</h3>
        <p>Si has encontrado un problema con Kali Linux, por favor, haz una publicación en nuestro <a href="https://bugs.kali.org/">rastreador de errores</a>.</p>
        
        <h3>Consultas Generales</h3>
        <p>Para consultas generales, puedes enviarnos un correo a <a href="mailto:info@kali.org">info@kali.org</a>.</p>
        
        <h3>Reportar una Vulnerabilidad</h3>
        <p>Si has encontrado una vulnerabilidad de seguridad, por favor, repórtala a través de nuestro <a href="https://www.kali.org/security/">programa de recompensas por errores</a>.</p>
      </div>
    </div>
  );
};

export default Contact;

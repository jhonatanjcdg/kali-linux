import React from 'react';
import './hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/dashboard');
    };

    return (
        <section className="hero">
            <h1>Bienvenido a Kali Linux</h1>
            <p>Explora el sistema operativo más avanzado para pruebas de penetración y seguridad informática.</p>
            <button onClick={handleStartClick}>Comenzar</button>

            <div className="linux-info">
                <h2>¿Qué es Kali Linux?</h2>
                <p>
                    Kali Linux es una distribución de Linux basada en Debian, diseñada para tareas de seguridad informática como pruebas de penetración, investigación de seguridad, forense digital y ingeniería inversa. Es una plataforma de código abierto que proporciona una amplia gama de herramientas de seguridad.
                </p>

                <h3>¿Por qué elegir Kali Linux?</h3>
                <p>
                    Kali Linux es el sistema preferido para profesionales de seguridad informática debido a su enfoque especializado y su amplio conjunto de herramientas preinstaladas, las cuales son difíciles de encontrar integradas en otros sistemas. Es una elección ideal para:
                </p>
                <ul>
                    <li><strong>Pruebas de penetración:</strong> Realizar evaluaciones de seguridad en redes y sistemas para detectar y mitigar vulnerabilidades.</li>
                    <li><strong>Forense digital:</strong> Recuperar datos y analizar evidencia en investigaciones de ciberseguridad.</li>
                    <li><strong>Ingeniería inversa:</strong> Examinar software en profundidad para detectar amenazas y analizar su funcionamiento.</li>
                    <li><strong>Investigación en ciberseguridad:</strong> Acceder a herramientas de alto nivel para pruebas avanzadas y trabajos de investigación.</li>
                </ul>

                <h3>Características Principales</h3>
                <ul>
                    <li><strong>Open Source:</strong> El código fuente está disponible para que cualquiera lo use, modifique y distribuya.</li>
                    <li><strong>Seguridad:</strong> Kali Linux es conocido por su robusta seguridad y resistencia a virus y malware.</li>
                    <li><strong>Flexibilidad:</strong> Puede ser utilizado en una amplia gama de dispositivos y configuraciones.</li>
                    <li><strong>Comunidad:</strong> Una gran comunidad de desarrolladores y usuarios que contribuyen y ofrecen soporte.</li>
                    <li><strong>Personalización:</strong> Fácil de personalizar para tareas específicas mediante metapaquetes y un proceso de personalización de ISO bien documentado.</li>
                </ul>

                <h3>Herramientas Populares</h3>
                <ul>
                    <li><strong>Nmap:</strong> Escaneo de redes y auditoría de seguridad.</li>
                    <li><strong>Metasploit:</strong> Plataforma para pruebas de penetración.</li>
                    <li><strong>Wireshark:</strong> Análisis de tráfico de red.</li>
                    <li><strong>John the Ripper:</strong> Cracking de contraseñas.</li>
                    <li><strong>Burp Suite:</strong> Pruebas de seguridad web.</li>
                    <li><strong>Hydra:</strong> Ataques de fuerza bruta.</li>
                </ul>

                <h3>Casos de Uso</h3>
                <p>
                    Kali Linux se utiliza en una variedad de escenarios de seguridad informática:
                </p>
                <ul>
                    <li><strong>Pruebas de Penetración:</strong> Evaluación de la seguridad de sistemas y redes.</li>
                    <li><strong>Investigación de Seguridad:</strong> Análisis y mitigación de vulnerabilidades.</li>
                    <li><strong>Forense Digital:</strong> Investigación de incidentes de seguridad y recuperación de datos.</li>
                    <li><strong>Ingeniería Inversa:</strong> Análisis de software y detección de malware.</li>
                </ul>

                <h3>Recursos Adicionales</h3>
                <ul>
                    <li><a href="https://www.kali.org/docs/">Documentación Oficial de Kali Linux</a></li>
                    <li><a href="https://www.kali.org/tutorials/">Tutoriales de Kali Linux</a></li>
                    <li><a href="https://forums.kali.org/">Foros de Kali Linux</a></li>
                    <li><a href="https://www.reddit.com/r/Kalilinux/">Reddit - Kali Linux</a></li>
                    <li><a href="https://www.offensive-security.com/">Offensive Security</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;

import React, { useEffect } from 'react';
import './comments.css';

const CommentsAndAuthors = () => {
    useEffect(() => {
        // Configuración de Disqus
        const disqus_config = function () {
            this.page.url = window.location.href; // URL de la página
            this.page.identifier = window.location.pathname; // Identificador de la página
        };

        // Cargar el script de Disqus
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://your-disqus-shortname.disqus.com/embed.js'; // Reemplaza "your-disqus-shortname"
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }, []);

    return (
        <section className="comments-authors">
            <h2>Zona de Comentarios</h2>
            <div id="disqus_thread"></div> {/* Div donde se cargan los comentarios */}

            <h3>Autores</h3>
            <div className="authors-info">
                <div className="author">
                    <h4>Jhonatan Juan Carlos Delgado Gómez</h4>
                    <p>Estudiante de Ingeniería en Sistemas</p>
                    <p>Contacto: <a href="mailto:j3172224877z@email.com">j3172224877z@email.com</a></p>
                </div>

                <div className="author">
                    <h4>Jhonatan Felix</h4>
                    <p>Estudiante de Ingeniería en Sistemas</p>
                    <p>Contacto: <a href="mailto:jhonatan.felix@email.com">jhonatan.felix@email.com</a></p>
                </div>
            </div>
        </section>
    );
};

export default CommentsAndAuthors;

import React from 'react';
import styles from '../styles/HomeFooter.module.css';

function HomeFooter() {
  return (
    <div className={styles.container}>
      <div>
      <nav>
    <ul>
        <li><h4>Compañía</h4></li>
        <li>Acerca de Nosotros</li>
        <li>Por Qué Elegirnos</li>
        <li>Precios</li>
        <li>Testimonios</li>
    </ul>
    <ul>
        <li><h4>Recursos</h4></li>
        <li>Política de Privacidad</li>
        <li>Términos y Condiciones</li>
        <li>Blog</li>
        <li>Contáctanos</li>
    </ul>
    <ul>
        <li><h4>Producto</h4></li>
        <li>Gestión de Proyectos</li>
        <li>Seguimiento de Tiempo</li>
        <li>Programación de Tiempo</li>
        <li>Generación de Prospectos</li>
        <li>Colaboración Remota</li>
    </ul>
    <section>
        <h1>Verbify</h1>
        <h4>Suscríbete a nuestro boletín</h4>
        <form>
            <input placeholder='Ingresa tu correo electrónico'></input>
            <button>Suscribirse</button>
        </form>
    </section>
</nav>       
      <section className={styles.logo_verbify}>
      <hr className={styles.linea} />  
      <img src='https://i.ibb.co/TLQS9cS/Verbify-logo.png'/>
      <hr className={styles.linea} />  
      </section>
      </div>  
    </div>
  );
}

export default HomeFooter;

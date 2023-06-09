import React from 'react';
import styles from '../styles/Page404.module.css';

//Resources
import logo from '../assets/Verbify-logo.svg';
import Group from '../assets/Group.svg';
import img404 from '../assets/404.svg'

function Page404 () {
  return (
    <div className={styles.container__Page404}>
        <header>
    <img src={logo.src}/>
    </header>
    <section>
      <div>
        <img src={img404.src}/>
        <p>¡Ups! Esta Pagina no esta disponible por el momento</p>
        <button>Pagina anterior</button>
      </div>
      <div>
        <img src={Group.src}/>
      </div>
      </section>  
    </div>
  );
}

export default Page404;
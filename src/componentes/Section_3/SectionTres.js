import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Necesitas una oficina de cambio en
            <span className={styles.linea}> Málaga?</span>
          </h2>
          <p>
            <span>
              Visita cualquiera de nuestras 3 casas de cambio de divisas en
              Málaga y cambia cualquier divisa por euros sin comisiones y al
              instante. Consigue el mejor tipo de cambio de Málaga.{" "}
            </span>
            Tenemos más de 30 divisas disponibles para ofrecerte el mejor
            servicio.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h2>¿Cómo cambiar divisa?</h2>
          <p>
            Ven a nuestra tienda Money Exchange más cercana en Málaga, indícanos
            la divisa que quieres cambiar y te damos el dinero en efectivo y con
            el mejor tipo de cambio. Cambia divisa sin comisiones en Quickgold.
          </p>
        </div>
      </div>
      <h1>
        Cambiar divisa en <span className={styles.linea}>Málaga</span> es muy
        fácil
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;

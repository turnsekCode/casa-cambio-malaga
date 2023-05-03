import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Málaga</span>
        </h2>
        <p>
          ¿Necesitas cambiar divisa en Málaga? En Quickgold tenemos 3 oficinas
          de cambio de divisa muy cerca de ti. Ya sea que vives en la ciudad o
          estás de vacaciones dándote un baño en la playa de la Malagueta, ahora
          puedes cambiar moneda extranjera sin comisiones. En quickgold tenemos
          más de 30 monedas disponibles, desde dólares a libras pasando por
          dirhams o reales. No hace falta que compares, en nuestras casas de
          cambio tenemos el mejor tipo de cambio de toda la ciudad de Málaga.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-malaga.webp"
          alt="Cambiar Dólares a Euros Málaga"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;

import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Casas de cambio en <span className={styles.linea}>Málaga</span>
        </h1>
        <p>
          En Quickgold tenemos más de 30 monedas para cambiar moneda extranjera.
          Encuentra tu oficina de cambio de divisas en Málaga más cercana y
          consigue la divisa que necesitas al instante.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900373629" title="Teléfono">
            llama gratis
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/divisa-mobil.webp"
            alt="Casas de cambio Malaga"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/divisa.webp"
            alt="Casas de cambio Malaga"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;

import React from "react";
import styles from "./breadcrumbs.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrumbs = () => {
  return (
    <div className={styles.sectionBreadcrumbs}>
      <div className={styles.contenedorBreadcrumbs}>
        <a href="https://quickgold.es/" title="Ir a Quickgold">
          Home
        </a>
        <KeyboardArrowRightIcon />
      </div>
      <a
        href="https://quickgold.es/casa-cambio-malaga/"
        title="Ir a casa cambio malaga"
      >
        Casa Cambio malaga
      </a>
    </div>
  );
};

export default Breadcrumbs;

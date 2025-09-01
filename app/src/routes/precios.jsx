import { createFileRoute } from "@tanstack/react-router";
import styles from "./Precios.module.css";

export const Route = createFileRoute("/precios")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className={styles["precios-container"]}>
      <h1>Conoce nuestros precios y promociones</h1>
      <div className={styles["pricing-grid"]}>
        <div className={styles["header-cell"]}>
          <div className={styles["header-text"]}></div>
        </div>
        <div className={styles["header-cell"]}>
          <div className={styles["header-text"]}>Servicio</div>
        </div>
        <div className={styles["header-cell"]}>
          <div className={styles["header-text"]}>Precio</div>
        </div>

        <div className={styles["separator-container"]}>
          <div className={styles.separator}></div>
        </div>

        <div className={styles["row-label"]}>
          <p>Consulta Individual</p>
        </div>

        <div className={styles["service-title"]}>Primera valoración</div>

        <div className={styles["service-cell"]}>Plan nutricional</div>
        <div className={styles["price-cell"]}>600MXN</div>

        <div className={styles["service-cell"]}>Plan de entrenamiento</div>
        <div className={styles["price-cell"]}>300MXN</div>

        <div className={styles["service-cell"]}>Plan integral</div>
        <div className={styles["price-cell"]}>700MXN</div>

        <div className={styles["empty-cell"]}></div>

        <div className={styles["service-cell"]}>Seguimientos</div>
        <div className={styles["price-cell"]}>400MXN</div>

        <div className={styles["separator-container"]}>
          <div className={styles.separator}></div>
        </div>

        <div className={styles["row-label"]}>
          <p>
            Consulta de pareja
            <sup>
              <a href="#footnote1">*</a>
            </sup>
          </p>
        </div>

        <div className={styles["service-title"]}>Primera valoración</div>

        <div className={styles["service-cell"]}>Plan nutricional</div>
        <div className={styles["price-cell"]}>500MXN</div>

        <div className={styles["service-cell"]}>Plan de entrenamiento</div>
        <div className={styles["price-cell"]}>250MXN</div>

        <div className={styles["service-cell"]}>Plan integral</div>
        <div className={styles["price-cell"]}>550MXN</div>

        <div className={styles["empty-cell"]}></div>

        <div className={styles["service-cell"]}>Seguimientos</div>
        <div className={styles["price-cell"]}>350MXN</div>

        <div className={styles["separator-container"]}>
          <div className={styles.separator}></div>
        </div>

        <div className={styles["row-label"]}>
          <p>
            Consulta familiar
            <sup>
              <a href="#footnote2">**</a>
            </sup>
          </p>
        </div>

        <div className={styles["service-title"]}>Primera valoración</div>

        <div className={styles["service-cell"]}>Plan nutricional</div>
        <div className={styles["price-cell"]}>450MXN</div>

        <div className={styles["service-cell"]}>Plan de entrenamiento</div>
        <div className={styles["price-cell"]}>200MXN</div>

        <div className={styles["service-cell"]}>Plan integral</div>
        <div className={styles["price-cell"]}>500MXN</div>

        <div className={styles["empty-cell"]}></div>

        <div className={styles["service-cell"]}>Seguimientos</div>
        <div className={styles["price-cell"]}>300MXN</div>

        <div className={styles["separator-container"]}>
          <div className={styles.separator}></div>
        </div>

        <div className={styles.footnote} id={styles.footnote1}>
          <sup>*</sup> Precio por persona
        </div>
        <div className={styles.footnote} id={styles.footnote2}>
          <sup>**</sup> Precio por persona. Grupos de 3 o mas que vivan juntos.
        </div>
      </div>

      <div className={styles["promociones-container"]}>
        <div className={styles.promociones}>
          <div className={styles["promociones-title"]}>
            ¡Aprovecha nuestras promociones!
          </div>
          <div className={styles["separator-container"]}>
            <div className={styles.separator}></div>
          </div>
          <ul className={styles["promociones-text"]}>
            <li>
              Ahorra 100MXN en tu próxima consulta por referir a un paciente.
              <sup>
                <a href="#footnote3">*</a>
              </sup>
            </li>
            <li>Tu 4ta consulta de seguimiento es gratis.</li>
            <li>Pregunta por nuestras recompensas de constancia.</li>
            <li>
              Ofrecemos consideraciones especiales para personas de bajos
              recursos. Consúltanos para conocer más
            </li>
          </ul>
          <div className={styles["separator-container"]}>
            <div className={styles.separator}></div>
          </div>
          <div className={styles.footnote} id="footnote3">
            <sup>*</sup> Maximo descuento 100MXN.
          </div>
        </div>
      </div>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./Servicios.module.css";
import Servicios from "../../assets/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg";
import NutricionClinica from "../../assets/pexels-beyzahzah-89810429-15319037.jpg";
import ControlDePeso from "../../assets/pexels-shvets-production-6975474.jpg";
import NutricionDeportiva from "../../assets/derick-mckinney-__QqvTI5Edc-unsplash.jpg";
import PlanesDeEntrenamiento from "../../assets/pexels-victorfreitas-2261482.jpg";
import Diabetes from "../../assets/pexels-wdnet-1001897.jpg";
import Cineantropometria from "../../assets/medicion-grasa-corporal.jpg";

export const Route = createFileRoute("/servicios/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className={styles["services-container"]}>
      <section className={styles.intro}>
        <div className={styles["intro-text"]}>
          <h1 className={styles["main-text"]}>
            Descubre el poder de una alimentación personalizada y alcanza tus
            objetivos de salud.
          </h1>
          <p className={styles["secondary-text"]}>
            Trabajamos contigo para crear planes nutricionales hechos a tu
            medida y lograr resultados reales.
          </p>
        </div>
        <img
          src={Servicios}
          alt="Ensaladas"
          title="Photo by Mariana Medvedeva on Unsplash"
        />
      </section>
      <section className={styles["services-overview"]}>
        <h2 className={styles["services-title"]}>Explora nuestros servicios</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <img
              src={NutricionClinica}
              alt="Nutrición clínica"
              title="Photo by beyzahzah on Pexels"
            />
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>Nutrición Clínica</h3>
              <p className={styles["service-body"]}>
                Logra tus objetivos de peso, controla enfermedades crónicas y
                mejora tu bienestar general con soluciones nutricionales
                diseñadas solo para ti. Trabajamos contigo para crear un plan de
                alimentación efectivo y guiarte hacia el éxito en tus metas de
                salud.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/nutricion-clinica"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>
                Pérdida y control de peso
              </h3>
              <p className={styles["service-body"]}>
                Te guiamos a lograr tus objetivos de peso con herramientas
                personalizadas y apoyo continuo. Mejora tu salud, autoestima y
                calidad de vida con un plan nutricional diseñado para ti.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/control-de-peso"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
            <img
              src={ControlDePeso}
              alt="Control de peso"
              title="Photo by SHVETS production on Pexels"
            />
          </div>
          <div className={styles.service}>
            <img
              src={NutricionDeportiva}
              alt="Nutrición deportiva"
              title="Photo by Derick McKinney on Unsplash"
            />
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>Nutrición deportiva</h3>
              <p className={styles["service-body"]}>
                Combina tu régimen de ejercicio con una nutrición estratégica
                para elevar tu rendimiento a otro nivel. Mejora tu recuperación,
                potencia tu desempeño y supera a la competencia con una
                nutrición estratégica.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/nutricion-deportiva"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>
                Planes de entrenamiento
              </h3>
              <p className={styles["service-body"]}>
                Mejora tu fuerza, resistencia y condición física con un plan
                diseñado para tu éxito. Te guiamos, motivamos y brindamos
                herramientas para alcanzar tus objetivos físicos y potenciar tu
                bienestar.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/planes-de-entrenamiento"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
            <img
              src={PlanesDeEntrenamiento}
              alt="Planes de entrenamiento"
              title="Photo by Victor Freitas on Pexels"
            />
          </div>
          <div className={styles.service}>
            <img
              src={Diabetes}
              alt="Diabetes"
              title="Photo by PhotoMIX Company on Pexels"
            />
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>Diabetes</h3>
              <p className={styles["service-body"]}>
                Descubre cómo la alimentación y el estilo de vida pueden
                ayudarte a controlar la diabetes y mejorar tu bienestar. Recibe
                orientación individualizada para aprender a manejar tus niveles
                de azúcar y prevenir complicaciones.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/diabetes"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
          </div>
          <div className={styles.service}>
            <div className={styles["service-text"]}>
              <h3 className={styles["service-title"]}>Cineantropometría</h3>
              <p className={styles["service-body"]}>
                Obtén información precisa sobre tu composición corporal para
                optimizar tus resultados de salud y fitness. Observa cómo tu
                cuerpo cambia con el tiempo y el esfuerzo a través de mediciones
                precisas de composición corporal.
              </p>
              <Link
                className={styles["service-learn-more"]}
                to="/servicios/cineantropometria"
              >
                ¡Descubre todos los beneficios!
              </Link>
            </div>
            <img src={Cineantropometria} alt="Cineantropometría" />
          </div>
        </div>
      </section>
      <section className={styles["cta-container"]}>
        <div className={styles.cta}>
          <h2>¡Reserva tu consulta hoy!</h2>
          <Link className={styles["booking-button"]} to="/contacto">
            Agenda tu cita
          </Link>
        </div>
      </section>
    </main>
  );
}

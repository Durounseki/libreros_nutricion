import { createFileRoute } from "@tanstack/react-router";
import LinkButton from "../components/LinkButton";
import InicioCTA from "../assets/inicio-cta.jpg";
import StepCita from "../assets/cita.jpg";
import StepEvaluacion from "../assets/evaluacion2.jpg";
import StepDieta from "../assets/dieta.jpg";
import StepSoporte from "../assets/soporte.jpg";
import styles from "./Index.module.css";
import Review from "../components/Review";
import reviews from "../data/reviews";
import Carousel from "../components/Carousel";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className={styles["main-container"]}>
      <section className={styles.intro}>
        <div className={styles["intro-text"]}>
          <h1 className={styles["main-text"]}>
            Tu camino hacia una vida más saludable empieza hoy
          </h1>
          <p className={styles["secondary-text"]}>
            Descubre cómo la nutrición personalizada puede ayudarte a alcanzar
            tus objetivos de salud y bienestar
          </p>
          <p className={styles["small-italic"]}>
            Ya seas deportista, estudiante o ama de casa, te ayudaré a crear un
            plan de alimentación que se adapte a tu estilo de vida y
            necesidades. <b>Agenda tu cita ahora</b> y comienza tu
            transformación.
          </p>
          <LinkButton className={styles["booking-button"]} to="/contacto">
            Agenda tu cita
          </LinkButton>
        </div>
        <img
          src={InicioCTA}
          alt="Comiendo saludable"
          title="Photo by Dushawn Jovic on Unsplash"
        />
      </section>
      <section className={styles["value-proposition"]}>
        <h2 className={styles["value-title"]}>
          Planes únicos para cada persona: Consideramos tus necesidades,
          preferencias y estilo de vida para crear un plan a tu medida.
        </h2>
        <p className={styles["value-text"]}>
          Nuestros planes de alimentación están diseñados para ayudarte a:
        </p>
        <ul>
          <li>
            <b>Alcanzar tu composición corporal ideal</b>: gana músculo y define
            tu figura
          </li>
          <li>
            <b>Mejorar tu rendimiento físico</b>: aumenta tu energía y vitalidad
          </li>
          <li>
            <b>Tomar mejores decisiones de alimentación</b>: preven o controla
            enfermedades crónicas
          </li>
          <li>
            <b>¡Ser tu mejor versión!</b>
          </li>
        </ul>
      </section>

      <section className={styles["how-it-works"]}>
        <h2 className={styles["how-title"]}>¿Cómo funciona?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <img
              src={StepCita}
              alt="Consulta"
              title="Photo by the National Cancer Institute on Unsplash"
            />
            <div className={styles["step-text"]}>
              <h3>1. Agendamos tu consulta de valoración</h3>
              <p>
                Juntos, exploraremos tu estilo de vida actual, hábitos
                alimenticios, historial médico y cualquier otra información
                relevante para desarrollar una estrategia personalizada que te
                ayude a alcanzar tus metas de salud y bienestar.
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles["step-text"]}>
              <h3>2. Evaluamos tu estado actual</h3>
              <p>
                Realizaremos un análisis exhaustivo de tu salud, considerando
                factores como tu peso, altura, índice de masa corporal, presión
                arterial, niveles de glucosa y cualquier otra condición médica
                relevante.
              </p>
            </div>

            <img
              src={StepEvaluacion}
              alt="Evaluación"
              title="Photo by Kenny Eliason on Unsplash"
            />
          </div>
          <div className={styles.step}>
            <img
              src={StepDieta}
              alt="Plan"
              title="Photo by Brooke Lark on Unsplash"
            />

            <div className={styles["step-text"]}>
              <h3>3. Diseñamos un plan personalizado</h3>
              <p>
                Crearemos un plan de alimentación adaptado a tu estilo de vida,
                preferencias alimenticias y necesidades nutricionales
                específicas. Este plan incluirá recomendaciones personalizadas
                sobre qué comer, cuándo comer y en qué cantidades, considerando
                tus gustos y aversiones, tu horario laboral y tus actividades
                diarias.
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles["step-text"]}>
              <h3>4. Te damos seguimiento y apoyo</h3>
              <p>
                Te acompañaremos durante todo el proceso, brindándote el apoyo y
                la motivación necesarios para alcanzar tus metas. Regularmente,
                realizaremos seguimientos para evaluar tu progreso, ajustar tu
                plan según sea necesario y abordar cualquier desafío que puedas
                enfrentar.
              </p>
            </div>

            <img
              src={StepSoporte}
              alt="Soporte"
              title="Photo by the National Cancer Institute on Unsplash"
            />
          </div>
        </div>
      </section>

      <section className={styles["testimonials-container"]}>
        <h2>Historias de éxito</h2>
        <Carousel data={reviews} styles={styles} />
        {/* <div className={styles.testimonials}>
          {reviews.map((review) => (
            <Review key={review.id} review={review} styles={styles} />
          ))}
        </div> */}
      </section>
      <section className={styles["cta-container"]}>
        <div className={styles.cta}>
          <h2>¡Reserva tu consulta hoy!</h2>
          <LinkButton className={styles["booking-button"]} to="/contacto">
            Agenda tu cita
          </LinkButton>
        </div>
      </section>
    </main>
  );
}

import LinkButton from "./LinkButton";
import FeatureList from "./FeatureList";

function ServicioLayout({ service, styles }) {
  return (
    <main className={styles["service-container"]}>
      <section className={styles.description}>
        <h2 className={styles["small-bold"]}>{service.subtitle}</h2>
        <h1 className={styles["main-text"]}>{service.title}</h1>
        <img src={service.image.src} alt={service.image.alt} />
      </section>
      <section className={styles.summary}>
        <h2>{service.summary.title}</h2>
        <p>{service.summary.introduction}</p>
        <FeatureList items={service.summary.points} />
      </section>
      <section className={styles["service-value"]}>
        <h2>{service.value.title}</h2>
        <p>{service.value.introduction}</p>
        <FeatureList items={service.value.points} />
        <p>{service.value.conclusion}</p>
      </section>

      <section className={styles["cta-container"]}>
        <div className={styles.cta}>
          <h2>{service.cta.title}</h2>
          <LinkButton className={styles["booking-button"]} to="/contacto">
            {service.cta.button}
          </LinkButton>
        </div>
      </section>
    </main>
  );
}

export default ServicioLayout;

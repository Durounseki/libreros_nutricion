import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styles from "./contacto.module.css";

export const Route = createFileRoute("/contacto")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "0",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");

    try {
      console.log("Form data submitted:", formData);

      setSubmissionStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "0",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <main className={styles["details-container"]}>
      <section className={styles["clinic-details"]}>
        <p className={styles["small-bold"]}>Experto en Nutrición</p>
        <h1 className={styles["main-text"]}>Contacto</h1>
        <p className={styles["small-italic"]}>
          ¡Tu camino a una vida más saludable comienza hoy!
        </p>

        <div className={styles.phone}>
          <i className="fa-solid fa-phone"></i>
          <p>5543182582</p>
        </div>
        <div className={styles.address}>
          <i className="fa-solid fa-location-dot"></i>
          <p>
            2da cerrada de Concepción Beistegui #4-10 Col. del Valle, Benito
            Juarez C. P. 03100
          </p>
        </div>
      </section>

      <section className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["patient-details"]}>
            <fieldset>
              <legend>Reserva tu consulta</legend>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="first-name">NOMBRE *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    placeholder="Ricardo"
                    required
                    minLength="1"
                    maxLength="50"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="last-name">APELLIDOS *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    placeholder="Flores García"
                    required
                    minLength="1"
                    maxLength="50"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="email">E-MAIL *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ricardo.floresg@nutricion.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="phone-number">NÚMERO TELEFÓNICO *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    placeholder="5511223344"
                    required
                    pattern="[0-9\s\-]{10,}"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="service">TIPO DE CONSULTA *</label>
                  <select
                    name="service"
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option
                      value="0"
                      disabled
                      hidden
                      className={styles.placeholder}
                    >
                      Elige una opcion
                    </option>
                    <option value="nutricion-clinica">Nutrición clínica</option>
                    <option value="control-de-peso">
                      Pérdida y control de peso
                    </option>
                    <option value="nutricion-deportiva">
                      Nutrición deportiva
                    </option>
                    <option value="planes-entrenamiento">
                      Planes de entrenamiento
                    </option>
                    <option value="educacion-diabetes">Diabetes</option>
                    <option value="cineantropometria">Cineantropometría</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>

          <div className={styles["send-container"]}>
            <button className={styles["submit-button"]} type="submit">
              Enviar
            </button>
          </div>
          <div className={styles.result}>
            {submissionStatus === "success" && (
              <p className={styles.success}>
                ¡Gracias! Tu mensaje ha sido enviado.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className={styles.error}>
                Hubo un error. Por favor, inténtalo de nuevo.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styles from "./contacto.module.css";
import { QRCodeSVG } from "qrcode.react";

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

        <div className={styles["whatsapp-container"]}>
          <div className={styles.phone}>
            <a href="https://wa.me/5215544696861">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="tel:5544696861">5544696861</a>
          </div>
          <QRCodeSVG value="https://wa.me/5215544696861" />
        </div>
        <div className={styles.address}>
          <i className="fa-solid fa-location-dot"></i>
          <p>
            2da cerrada de Concepción Beistegui #4-10 Col. del Valle, Benito
            Juarez C. P. 03100
          </p>
        </div>
        <iframe
          className={styles["google-map"]}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5569754852777!2d-99.16598011746828!3d19.388326395395147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff002e551c33%3A0x7fa3a3d9bbbd8b66!2sAlfonso%20Libreros%20Nutri%C3%B3logo!5e0!3m2!1sen!2sjp!4v1757071990912!5m2!1sen!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styles from "./contacto.module.css";
import { QRCodeSVG } from "qrcode.react";
import DOMPurify from "dompurify";

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

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validate = (data) => {
    const newErrors = {};

    if (!data.firstName) {
      newErrors.firstName = "Ingresa tu nombre";
    }
    if (!data.lastName) {
      newErrors.lastName = "Ingresa tus apellidos";
    }

    if (!data.email) {
      newErrors.email = "Ingresa tu dirección de correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Por favor, ingresa una dirección de correo válida";
    }
    if (data.phoneNumber && !/^\+?[0-9\s-]{10,18}$/.test(data.phoneNumber)) {
      newErrors.phoneNumber =
        "Usa 10 dígitos. Para números internacionales, incluye el código de país (ej. +52).";
    }
    if (data.service === "0") {
      newErrors.service = "Elige un tipo de consulta";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    setErrors(validate(updatedFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalErrors = validate(formData);
    setErrors(finalErrors);
    if (Object.keys(finalErrors).length > 0) {
      return;
    }
    setSubmissionStatus("loading");
    const sanitizedData = {
      firstName: DOMPurify.sanitize(formData.firstName),
      lastName: DOMPurify.sanitize(formData.lastName),
      email: DOMPurify.sanitize(formData.email),
      phoneNumber: DOMPurify.sanitize(formData.phoneNumber),
      service: formData.service,
    };

    const apiUrl = `${import.meta.env.VITE_API_URL}/api/contact`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      setSubmissionStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "0",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmissionStatus("error");
    }
  };

  const getInputClass = (fieldname) => {
    if (!formData[fieldname] && !errors[fieldname]) return "";
    return errors[fieldname] ? styles["invalid-input"] : styles["valid-input"];
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
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles["patient-details"]}>
            <fieldset>
              <legend>Reserva tu consulta</legend>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="first-name">NOMBRE *</label>
                  <input
                    className={getInputClass("firstName")}
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
                  {errors.firstName && (
                    <p className={styles["error-message"]}>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="last-name">APELLIDOS *</label>
                  <input
                    className={getInputClass("lastName")}
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
                  {errors.lastName && (
                    <p className={styles["error-message"]}>{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="email">E-MAIL *</label>
                  <input
                    className={getInputClass("email")}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ricardo.floresg@nutricion.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className={styles["error-message"]}>{errors.email}</p>
                  )}
                </div>
                <div className={styles["input-group"]}>
                  <label htmlFor="phone-number">NÚMERO TELEFÓNICO</label>
                  <input
                    className={getInputClass("phoneNumber")}
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    placeholder="5511223344"
                    pattern="\+?[0-9\s\-]{10,18}"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <p className={styles["error-message"]}>
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="service">TIPO DE CONSULTA *</label>
                  <select
                    className={getInputClass("service")}
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
                    <option value="Nutrición Clínica">Nutrición clínica</option>
                    <option value="Control de Peso">
                      Pérdida y control de peso
                    </option>
                    <option value="Nutrición Deportiva">
                      Nutrición deportiva
                    </option>
                    <option value="Planes Entrenamiento">
                      Planes de entrenamiento
                    </option>
                    <option value="Educación en Diabetes">Diabetes</option>
                    <option value="Cineantropometría">Cineantropometría</option>
                  </select>
                  {errors.service && (
                    <p className={styles["error-message"]}>{errors.service}</p>
                  )}
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

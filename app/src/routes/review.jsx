import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import styles from "./Review.module.css";
import DOMPurify from "dompurify";

export const Route = createFileRoute("/review")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rating: "1",
    text: "",
  });
  const [errors, setErrors] = useState({});
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
    if (!data.text) {
      newErrors.text = "Por favor, escribe tu reseña o comentario";
    } else if (data.text.length < 10) {
      newErrors.text = "Mínimo 10 caracteres";
    }
    return newErrors;
  };
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [prevRating, setPrevRating] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    setErrors(validate(updatedFormData));
  };

  const handleStarEnter = (index) => {
    setPrevRating(index + 1);
  };
  const handleStarOut = () => {
    setPrevRating(0);
  };
  const handleRating = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: index + 1,
    }));
    setPrevRating(0);
  };
  const getStarClass = (index) => {
    const currentRating = formData.rating;
    const hoverRating = prevRating;
    const isSolid = index < currentRating || index < hoverRating;
    const iconClass = isSolid ? "fa-solid fa-star" : "fa-regular fa-star";
    let colorClass = "";
    if (hoverRating > 0) {
      if (hoverRating > currentRating) {
        if (index < currentRating) colorClass = styles["selected-star"];
        else if (index < hoverRating) colorClass = styles["add-star"];
      } else if (hoverRating < currentRating) {
        if (index < hoverRating) colorClass = styles["selected-star"];
        else if (index < currentRating) colorClass = styles["remove-star"];
      } else {
        if (index < currentRating) colorClass = styles["selected-star"];
      }
    } else {
      if (index < currentRating) colorClass = styles["selected-star"];
    }
    return `${iconClass} ${colorClass}`;
  };

  const handleReviewTextChange = (event) => {
    const textArea = textAreaRef.current;
    handleChange(event);
    textArea.style.height = "auto";
    textArea.style.height = `calc(${textArea.scrollHeight}px + 1em)`;
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
      text: DOMPurify.sanitize(formData.text),
      rating: formData.rating,
    };

    const apiUrl = `${import.meta.env.VITE_API_URL}/api/review`;
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
        rating: "1",
        text: "",
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
    <main className={styles["review-container"]}>
      <h1 className={styles["main-text"]}>Ayúdanos a mejorar</h1>
      <p className={styles["small-italic"]}>
        Para seguir ofreciendo el mejor servicio posible, es fundamental conocer
        tu perspectiva. Agradecemos sinceramente tus comentarios.
      </p>
      <section className={styles["form-container"]}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles["patient-details"]}>
            <fieldset>
              <legend>Escribe tu reseña</legend>
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
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="rating">CALIFICACIÓN *</label>
                  <div
                    className={styles["star-rating"]}
                    onMouseLeave={handleStarOut}
                  >
                    {[...Array(5)].map((_, index) => {
                      return (
                        <i
                          key={index}
                          className={getStarClass(index)}
                          onClick={() => handleRating(index)}
                          onMouseEnter={() => handleStarEnter(index)}
                        ></i>
                      );
                    })}
                    <input
                      type="hidden"
                      name="rating"
                      id="rating"
                      value={formData.rating}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles["input-group"]}>
                  <label htmlFor="text">COMENTARIO *</label>
                  <textarea
                    className={getInputClass("text")}
                    ref={textAreaRef}
                    placeholder="Escribe tu reseña"
                    name="text"
                    id="text"
                    value={formData.text}
                    onChange={handleReviewTextChange}
                  ></textarea>
                  {errors.text && (
                    <p className={styles["error-message"]}>{errors.text}</p>
                  )}
                </div>
              </div>
            </fieldset>
          </div>
          <button className={styles["submit-button"]} type="submit">
            Enviar
          </button>
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

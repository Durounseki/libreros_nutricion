import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import styles from "./Review.module.css";

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
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [prevRating, setPrevRating] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    console.log(hoverRating, currentRating);
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
    setSubmissionStatus("loading");

    const apiUrl = `${import.meta.env.VITE_API_URL}/api/review`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmissionStatus("error");
    }
  };
  return (
    <main className={styles["review-container"]}>
      <h1 className={styles["main-text"]}>Ayúdanos a mejorar</h1>
      <p className={styles["small-italic"]}>
        Para seguir ofreciendo el mejor servicio posible, es fundamental conocer
        tu perspectiva. Agradecemos sinceramente tus comentarios.
      </p>
      <section className={styles["form-container"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["patient-details"]}>
            <fieldset>
              <legend>Escribe tu reseña</legend>
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
                    ref={textAreaRef}
                    placeholder="Escribe tu reseña"
                    name="text"
                    id="text"
                    onChange={handleReviewTextChange}
                  ></textarea>
                </div>
              </div>
            </fieldset>
          </div>
          <button className={styles["submit-button"]} type="submit">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}

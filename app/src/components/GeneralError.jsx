import { Link } from "@tanstack/react-router";
import styles from "./ErrorPage.module.css";

function GeneralError({ error }) {
  return (
    <main className={styles["error-container"]}>
      <h1>¡Ups! Algo salió mal.</h1>
      <p>Ocurrió un error inesperado.</p>
      <pre>
        <code>
          {error instanceof Error
            ? error.message
            : JSON.stringify(error, null, 2)}
        </code>
      </pre>
      <Link to="/" className={styles["back-link"]}>
        Volver al inicio
      </Link>
    </main>
  );
}

export default GeneralError;

import { Link } from "@tanstack/react-router";
import styles from "./ErrorPage.module.css";

function NotFound() {
  return (
    <main className={styles["error-container"]}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className={styles["back-link"]}>
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;

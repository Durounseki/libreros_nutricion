import Logo from "../assets/logo3.svg";
import NavLink from "./NavLink";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["main-header"]}>
      <div className={styles.banner}>
        <img src={Logo} alt="ALFONSO LIBREROS NUTRIOLOGO" />
        <h1>ALFONSO LIBREROS NUTRIOLOGO</h1>
      </div>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/precios">Precios</NavLink>
        <NavLink to="/about">Dr. Libreros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}

export default Header;

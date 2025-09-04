import { useState } from "react";
import LinkButton from "./LinkButton";
import Logo from "../assets/logo3.svg";
import Letras from "../assets/al-logotipo.svg";
import styles from "./MobileHeader.module.css";
import NavLink from "./NavLink";
import serviciosData from "../data/serviciosData";

const services = Object.values(serviciosData).map((service) => ({
  id: service.id,
  title: service.title,
}));

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <header className={styles["main-header"]}>
        <LinkButton to="/" className={styles.banner}>
          <img src={Logo} alt="ALN LOGO" />
          <img src={Letras} alt=" ALFONSO LIBREROS NUTRIOLOGO" />
        </LinkButton>
        <div className={styles["menu-button"]} onClick={toggleMenu}>
          <i
            className={`fa-solid fa-bars ${isMenuOpen ? "" : styles["active-icon"]}`}
          ></i>
          <i
            className={`fa-solid fa-xmark ${isMenuOpen ? styles["active-icon"] : ""}`}
          ></i>
        </div>
      </header>
      <nav
        className={
          styles["mobile-menu"] +
          " " +
          (isMenuOpen ? styles.open : styles.close)
        }
      >
        <div className={styles["nav-tab"]}>
          <NavLink to="/" styles={styles} onClick={toggleMenu}>
            Inicio
          </NavLink>
        </div>
        <div
          className={
            styles["nav-tab"] +
            " " +
            (isDropdownVisible ? styles.show : styles.hide)
          }
          onClick={toggleDropdown}
        >
          <span className={styles["nav-tab-title"]}>
            Servicios
            {isDropdownVisible ? (
              <i className="fa-solid fa-caret-down"></i>
            ) : (
              <i className="fa-solid fa-caret-right"></i>
            )}
          </span>
          <ul>
            <li>
              <NavLink to="/servicios" styles={styles} onClick={toggleMenu}>
                Todos
              </NavLink>
            </li>
            {services.map((service) => (
              <li key={service.id}>
                <NavLink
                  to={`/servicios/${service.id}`}
                  styles={styles}
                  onClick={toggleMenu}
                >
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["nav-tab"]}>
          <NavLink to="/precios" styles={styles} onClick={toggleMenu}>
            Precios
          </NavLink>
        </div>
        <div className={styles["nav-tab"]}>
          <NavLink to="/about" styles={styles} onClick={toggleMenu}>
            Dr. Libreros
          </NavLink>
        </div>
        <div className={styles["nav-tab"]}>
          <NavLink to="/contacto" styles={styles} onClick={toggleMenu}>
            Contacto
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default MobileHeader;

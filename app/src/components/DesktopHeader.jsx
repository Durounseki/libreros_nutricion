import { useState } from "react";
import Logo from "../assets/logo3.svg";
import NavLink from "./NavLink";
import styles from "./DesktopHeader.module.css";
import serviciosData from "../data/serviciosData";

const services = Object.values(serviciosData).map((service) => ({
  id: service.id,
  title: service.title,
}));

function DesktopHeader() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className={styles["main-header"]}>
      <div className={styles.banner}>
        <img src={Logo} alt="ALFONSO LIBREROS NUTRIOLOGO" />
        <h1>ALFONSO LIBREROS NUTRIOLOGO</h1>
      </div>
      <nav>
        <div className={styles["nav-tab"]}>
          <NavLink to="/" styles={styles}>
            Inicio
          </NavLink>
        </div>
        <div
          className={styles["nav-tab"]}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a className={styles["nav-tab-title"]} href="#">
            Servicios
          </a>
          <ul className={isDropdownVisible ? styles.show : styles.hide}>
            <li>
              <NavLink to="/servicios" styles={styles}>
                Todos
              </NavLink>
            </li>
            {services.map((service) => (
              <li key={service.id}>
                <NavLink to={`/servicios/${service.id}`} styles={styles}>
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["nav-tab"]}>
          <NavLink to="/precios" styles={styles}>
            Precios
          </NavLink>
        </div>
        {/* <div className={styles["nav-tab"]} styles={styles}>
          <NavLink to="/about" styles={styles}>
            Dr. Libreros
          </NavLink>
        </div> */}
        <div className={styles["nav-tab"]} styles={styles}>
          <NavLink to="/contacto" styles={styles}>
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default DesktopHeader;

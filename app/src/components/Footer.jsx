import Logo from "../assets/logo3.svg";
import LogoLetters from "../assets/al-logotipo.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["main-footer"]}>
      <div className={styles.banner}>
        <img src={Logo} alt="ALFONSO LIBREROS NUTRIOLOGO" />
        <img src={LogoLetters} alt="ALFONSO LIBREROS NUTRIOLOGO" />
      </div>
      <p>&copy; 2025 ELWeb</p>
    </footer>
  );
}

export default Footer;

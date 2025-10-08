import Logo from "../assets/logo3.svg";
import LinkButton from "./LinkButton";
import LogoLetters from "../assets/al-logotipo.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["main-footer"]}>
      <LinkButton to="/" className={styles.banner}>
        <img src={Logo} alt="ALFONSO LIBREROS NUTRIOLOGO" />
        <img src={LogoLetters} alt="ALFONSO LIBREROS NUTRIOLOGO" />
      </LinkButton>
      <p>&copy; 2025 ELWeb</p>
    </footer>
  );
}

export default Footer;

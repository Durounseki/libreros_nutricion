import { Link } from "@tanstack/react-router";
import styles from "./Header.module.css";

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      activeProps={{ className: styles.active }}
    >
      {children}
    </Link>
  );
}

export default NavLink;

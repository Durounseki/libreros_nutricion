import { Link } from "@tanstack/react-router";
function NavLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
}

export default NavLink;

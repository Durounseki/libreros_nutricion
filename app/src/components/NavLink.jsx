import { Link } from "@tanstack/react-router";

function NavLink({ to, styles, children, onClick }) {
  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      activeProps={{ className: styles.active }}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default NavLink;

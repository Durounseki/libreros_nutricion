import { Link } from "@tanstack/react-router";

function LinkButton({ to, children, className }) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

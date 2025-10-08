import { Link } from "@tanstack/react-router";

function LinkButton({ to, children, className }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

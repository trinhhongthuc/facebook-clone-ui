import { Link } from "react-router-dom";
import "./button.scss";

interface Props {
  primary?: string;
  title: string;
  secondary?: string;
  width: "full" | "fit-content";
  to?: string;
}

const Button: React.FC<Props> = ({ primary, title, secondary, width, to }) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`btn ${primary} ${secondary} ${
            width === "full" ? "full-content" : "fit-content"
          }`}
        >
          <span>{title}</span>
        </Link>
      ) : (
        <button
          className={`btn ${primary} ${secondary} ${
            width === "full" ? "full-content" : "fit-content"
          }`}
        >
          <span>{title}</span>
        </button>
      )}
    </>
  );
};

export default Button;

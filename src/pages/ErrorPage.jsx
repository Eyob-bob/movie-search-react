import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p className="error">ErrorPage</p>
      <Link className="link" to="/">
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;

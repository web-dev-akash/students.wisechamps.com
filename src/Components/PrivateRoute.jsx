import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { mode } = useSelector((state) => state);

  if (mode !== "user") {
    return <Navigate to="/" />;
  }
  return children;
};

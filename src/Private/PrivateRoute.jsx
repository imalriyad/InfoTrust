import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return <h1>Loading.......</h1>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/Login"}></Navigate>;
};

export default PrivateRoute;

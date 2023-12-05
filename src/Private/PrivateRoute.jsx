import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import '../Components/Loader.css'

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-white w-full h-screen">
        <div className="flex mx-auto max-w-screen-sm md:py-[20%] py-[40%] items-center justify-center space-x-2">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  if (user && user.emailVerified) {
    return children;
  }

  return <Navigate to={"/Login"}></Navigate>;
};

export default PrivateRoute;

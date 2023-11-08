import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return (
      <div className="bg-black w-full h-screen">
        <div className="flex mx-auto max-w-screen-sm py-[40%] items-center justify-center space-x-2">
          <div className="w-20 h-20 border-8 border-dashed border-mainColor rounded-full animate-spin "></div>
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

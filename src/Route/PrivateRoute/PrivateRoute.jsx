import { Navigate, useLocation } from "react-router";
import Spinner from "../../Components/Shared/Spinner";
import useAuth from "../../Hooks/useAuth";
import { Children } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
};

export default PrivateRoute;

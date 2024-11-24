import { useContext } from "react";
import { AuthContextApi } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  console.log(location);

  const { userLogIn, loading } = useContext(AuthContextApi);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  } else if (userLogIn) {
    return <div>{children}</div>;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

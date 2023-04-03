import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const { authUser } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <>
      {!authUser ? (
        <Navigate to="signin" state={{ from: location.pathname }} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AuthRequired;

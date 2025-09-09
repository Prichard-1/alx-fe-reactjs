import { Navigate } from "react-router-dom";

// ✅ Authentication hook
const useAuth = () => {
  const auth = localStorage.getItem("auth");
  return auth === "true"; // returns true/false
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

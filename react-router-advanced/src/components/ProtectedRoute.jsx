import { Navigate } from "react-router-dom";

// Simple authentication simulation
const isAuthenticated = () => localStorage.getItem("auth") === "true";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

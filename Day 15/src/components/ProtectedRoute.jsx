import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // We will mock the auth state for today. 
  // Change this to 'true' to see the dashboard, or 'false' to test the redirect!
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
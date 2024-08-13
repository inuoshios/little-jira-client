import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "./use-auth-status";

function ProtectedRoute() {
  const loggedIn = useAuthStatus();

  // if (checkingStatus) {
  //   <div>loading...</div>
  // }

  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;

// <Outlet /> in the app.tsx, the inner route is the child root
// that is what is being rendered
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./hooks/protected-routes";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/auth/Signin";
import SignUp from "./pages/auth/Signup";

function App() {
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={<ProtectedRoute />} path="/dashboard">
        <Route element={<DashBoard />} path="/dashboard" />
      </Route>
    </Routes>
  );
}

export default App;

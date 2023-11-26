import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route element={<SignIn />} path="/" />
      <Route element={<SignUp />} path="/signup" />
      <Route element={<DashBoard />} path="/dashboard" />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route element={<SignUp />} path="/signup" />
      <Route element={<SignIn />} path="/signin" />
    </Routes>
  );
}

export default App;

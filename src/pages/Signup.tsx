import { useState } from "react";
import axios from "axios";
import SignUpLogo from "../assets/Signup/littlejira-logo.svg";

function SignUp() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function submitForm(e: Event) {
    try {
      e.preventDefault();
      const response = await axios.post('', { username, first_name, last_name, email, gender, password });
      setIsCompleted(true);
      console.log(response.data);
    } catch (err: any) {
      if (err.response) {
        setErrorMessage(err.response.data);
      } else {
        setErrorMessage("An error occured while signing up");
      }
      console.error("An error occured while signing up", err);
    } finally {
      setIsCompleted(false);
    }
  }

  return (
    <div className="w-100 flex flex-row">
      <div className="m-20">
        <div>
          <img className="w-[220px]" src={SignUpLogo} alt="syncate logo" />
        </div>

        <div>
          <h1 className="text-[40px] font-bold mt-10">Sign up</h1>
          <p className="text-[20px]">New to Syncate? <span className="text-spanColor">Create an account</span></p>

          <form action="">

          </form>
        </div>
      </div>
      <div>
        right side
      </div>
    </div>
  );
}

export default SignUp;
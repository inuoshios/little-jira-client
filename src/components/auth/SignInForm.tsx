import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../utils/index";
import { useLocalStorage } from "../../utils/useLocalStorage";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { setItem } = useLocalStorage("accessToken");

  async function submitForm(e: React.MouseEvent) {
    console.log(`${config.apiUrl}/user/signin`);
    try {
      e.preventDefault();
      setIsCompleted(true);
      const { data } = await axios.post(
        `${config.apiUrl}/user/signin`,
        { username, password },
      );
      setItem(data.access_token);
      navigate("/dashboard");
    } catch (err: any) {
      if (err.response) {
        setErrorMessage(err.response.data);
      } else {
        setErrorMessage("An error occured while signing in");
      }
      console.error("An error occured while signing in", err);
    } finally {
      setIsCompleted(false);
    }
  }

  return (
    <form action="">
      <div className="mt-5">
        <label htmlFor="username" className="text-[15px] block mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-[413px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="lastName" className="text-[15px] block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-[413px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
        />
      </div>

      <div className="mt-5">
        <button
          onClick={(e) => {
            submitForm(e);
          }}
          className="w-[413px] bg-buttonColorS text-white p-3 rounded-[6px] border-[1px] border-solid text-[14px] outline-none"
        >
          {isCompleted ? "Signing in..." : "Login"}
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
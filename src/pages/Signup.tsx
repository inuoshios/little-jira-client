import React, { useState } from "react";
import axios from "axios";
import SignUpLogo from "../assets/Signup/littlejira-logo.svg";
import SidePicture from "../assets/Signup/littlejira-temp.svg";
import config from "../utils";

function SignUp() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: ""
  });

  async function submitForm(e: React.MouseEvent) {
    try {
      e.preventDefault();
      const errors: any = {};
      switch ('') {
        case username:
          errors.username = "Username is required";
          break;
        case first_name:
          errors.first_name = "First name is required";
          break;
        case last_name:
          errors.last_name = "Last name is required";
          break;
        case email:
          errors.email = "Email is required";
          break;
        case gender:
          errors.gender = "Gender is required";
          break;
        case password:
          errors.password = "Password is required";
          break;
        default:
          break;
      }

      if (Object.keys(errors).length) {
        setFieldErrors(errors);
        return;
      }

      setIsCompleted(true);
      const response = await axios.post(`${config.apiUrl}/user/signup`, { username, first_name, last_name, email, gender, password });
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
    <div className="w-100 flex justify-center items-center space-x-28">
      <div>
        <img className="w-[150px]" src={SignUpLogo} alt="syncate logo" />

        <h1 className="text-[25px] font-extrabold mt-8">Sign up</h1>
        <p className="text-[15px] text-[#636363]">Have an account? <span className="text-spanColor">Sign in</span></p>

        <form action="">
          <div className="mt-5 flex w-[413px] space-x-2">
            <div>
              <label htmlFor="firstName" className="text-[15px] block mb-2">First Name</label>
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                className="w-[203px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
              />
              {fieldErrors.first_name && (
                <p className="text-red-500 text-[8px]">{fieldErrors.first_name}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="text-[15px] block mb-2">Last Name</label>
              <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                className="w-[203px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
              />
              {fieldErrors.last_name && (
                <p className="text-red-500 text-[8px]">{fieldErrors.last_name}</p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="username" className="text-[15px] block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-[413px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
            />
            {fieldErrors.username && (
              <p className="text-red-500 text-[8px]">{fieldErrors.username}</p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-[15px] block mb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-[413px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-[8px]">{fieldErrors.email}</p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="lastName" className="text-[15px] block mb-2">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-[413px] bg-inputFieldColor p-3 rounded-[6px] border-[1px] border-solid text-[13px] outline-none appearance-none"
            >
              <option value="">Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {fieldErrors.gender && (
              <p className="text-red-500 text-[8px]">{fieldErrors.gender}</p>
            )}
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
            {fieldErrors.password && (
              <p className="text-red-500 text-[8px]">{fieldErrors.password}</p>
            )}
          </div>

          <div className="mt-5">
            <button
              onClick={(e) => {
                submitForm(e);
              }}
              className="w-[413px] bg-buttonColorS text-white p-3 rounded-[6px] border-[1px] border-solid text-[14px] outline-none"
            >
              {isCompleted ? "Registering user..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <div className="m-auto">
        <div className="flex justify-center items-center h-[100vh]">
          <img className="w-[85%]" src={SidePicture} alt="an image" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
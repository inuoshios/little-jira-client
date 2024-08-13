import { Link } from "react-router-dom";
import SyncateLogo from "../../assets/littlejira-logo.svg";
import SidePicture from "../../assets/littlejira-temp.svg";
import SignUpForm from "../../components/auth/SignUpForm";


function SignUp() {
  return (
    <div className="w-100 flex justify-center items-center space-x-28">
      <div>
        <img className="w-[150px]" src={SyncateLogo} alt="syncate logo" />

        <h1 className="text-[25px] font-extrabold mt-8">Sign up</h1>
        <p className="text-[15px] text-[#636363]">Have an account?
          <Link to={'/'}><span className="text-spanColor"> Sign in</span></Link>
        </p>

        <SignUpForm />

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
import SyncateLogo from "../assets/littlejira-logo.svg";
import SidePicture from "../assets/littlejira-temp.svg";
import SignInForm from "../components/SignInForm";

function Login() {
  return (
    <div className="w-100 flex justify-center items-center space-x-28">
      <div>
        <img className="w-[150px]" src={SyncateLogo} alt="syncate logo" />

        <h1 className="text-[25px] font-extrabold mt-8">Sign up</h1>
        <p className="text-[15px] text-[#636363]">New to Syncate? <span className="text-spanColor">Create an account</span></p>

        <SignInForm />

      </div>
      <div className="m-auto">
        <div className="flex justify-center items-center h-[100vh]">
          <img className="w-[85%]" src={SidePicture} alt="an image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
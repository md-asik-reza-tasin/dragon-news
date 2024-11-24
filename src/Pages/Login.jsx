import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContextApi } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

export default function Login() {
  
  const {logIn} = useContext(AuthContextApi);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleLogIn = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
    .then(result => {
      toast.success('SUCCESSFULLY LOG IN!')
      navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
      toast.error(error.message)
    })
  }

  return (
    <div className="w-2/3 mx-auto">
      <Navbar></Navbar>
      <div className="w-[700px] h-[550px] mx-auto border shadow-md flex flex-col justify-center items-center mt-28">
        <h1 className="text-center mt-14 text-4xl font-display text-[#403F3F] font-bold">
          Login your account
        </h1>
        <div className="w-[500px] h-[450px] mt-5 mx-auto">
          <form onSubmit={handleLogIn}>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Email Address
              </p>
              <input type="email" className="w-full h-14 bg-[#F3F3F3]" name="email"/>
            </div>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Password
              </p>
              <input type="password" className="w-full h-14 bg-[#F3F3F3]" name="password"/>
            </div>
            <div className="mt-5">
              <input type="submit" value="Log in" className="bg-[#403F3F] w-full h-14 mt-5 text-white" />
            </div>
          </form>
          <p className="text-center mt-7">Dont’t Have An Account ? <Link to='/register' className="text-[#FF8C47]">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

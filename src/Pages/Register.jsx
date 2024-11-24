import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContextApi } from "../AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { createNewUser } = useContext(AuthContextApi);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createNewUser(email, password)
      .then((result) => {
        toast.success("CONGRATULATIONS!!");
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/login");
        e.target.reset();
        console.log(result.user)
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-2/3 mx-auto">
      <Navbar></Navbar>
      <div className="w-[700px] h-full mx-auto border shadow-md flex flex-col justify-center items-center mt-28 mb-28">
        <h1 className="text-center mt-14 text-4xl font-display text-[#403F3F] font-bold">
          Register Your Account
        </h1>
        <div className="w-[500px] mt-5 mx-auto">
          <form onSubmit={handleRegister}>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Name
              </p>
              <input
                type="text"
                className="w-full h-14 bg-[#F3F3F3]"
                name="name"
              />
            </div>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Photo URL
              </p>
              <input
                type="text"
                className="w-full h-14 bg-[#F3F3F3]"
                name="photo"
              />
            </div>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Email Address
              </p>
              <input
                type="email"
                className="w-full h-14 bg-[#F3F3F3]"
                name="email"
              />
            </div>
            <div className="mt-5">
              <p className="font-display font-semibold text-xl text-[#403F3F] mb-3">
                Password
              </p>
              <input
                type="password"
                className="w-full h-14 bg-[#F3F3F3]"
                name="password"
              />
            </div>
            <div className="mt-5">
              <input
                type="submit"
                value="Submit"
                className="bg-[#403F3F] w-full h-14 mt-5 text-white"
              />
            </div>
          </form>
          <p className="text-center mb-10 mt-10">
            Already Have An Account ? Please{" "}
            <Link to="/login" className="text-[#FF8C47]">
              Log in
            </Link>
          </p>
        </div>
      </div>
     
    </div>
  );
}

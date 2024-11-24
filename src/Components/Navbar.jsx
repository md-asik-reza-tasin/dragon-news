import { Link, NavLink } from "react-router-dom";
import profile from "../assets/user.png";
import { useContext } from "react";
import { AuthContextApi } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const { userLogIn, logOut, loading } = useContext(AuthContextApi);

  const handleSignOut = () => {
     logOut()
     .then(() => {
        toast.success('SIGN OUT')
     })
     .catch()
  }

  return (
    <>
    <div className="flex justify-between mt-5">
      <div></div>
      <div className="flex gap-4 ml-48 text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
        <p>About</p>
        <p>Career</p>
      </div>
      <div className="flex items-center gap-2">
        {loading ? <span className="loading loading-ball loading-lg"></span> : userLogIn ? (
          <img
            className="w-16 h-14 rounded-full"
            src={userLogIn.photoURL}
            alt=""
          />
        ) : (
          <img src={profile} alt="" />
        )}
        {loading ? <span className="loading loading-ball loading-lg"></span> : userLogIn ? (
          <Link
            to="/login"
            className="w-[140px] h-[44px] bg-[#403F3F] text-white text-center pt-2"
            onClick={handleSignOut}
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="w-[140px] h-[44px] bg-[#403F3F] text-white text-center pt-2"
          >
            Log in
          </Link>
        )}
      </div>
      
    </div>
    </>
    
  );
}

import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContextApi } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

export default function LogInSection() {
  const { createUserByGoogle, userLogIn } = useContext(AuthContextApi);

  const handleGoogle = () => {
    createUserByGoogle()
      .then((result) => {
        toast.success("LOG IN SUCCESSFULLY");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="p-2">
      <h1 className="font-display font-semibold">Login With</h1>
      <div className="mt-4">
        <button onClick={handleGoogle} className="w-full flex justify-center items-center text-green-500 gap-3 border border-green-500 h-10 rounded-md" disabled={userLogIn ? true : false}>
          Log in with Google
          <FaGoogle className="text-green-600" />
        </button>
        <button className="w-full flex justify-center items-center gap-3 border border-black h-10 mt-2 rounded-md">
          Log in with Github
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
}

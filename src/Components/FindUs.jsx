import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="mt-8 p-2">
      <h1 className="font-display font-semibold">Find Us On</h1>
      <div className="mt-5">
        <div className="flex items-center gap-3 border rounded-t-lg p-4">
          <a href="">
            <FaFacebook className="w-11 h-6 text-blue-500"></FaFacebook>
          </a>
          <p className="font-display text-[#706F6F]">Facebook</p>
        </div>
        <div className="flex items-center gap-3 p-4 border border-y">
          <a href="">
            <FaTwitter className="w-11 h-6 text-blue-500"></FaTwitter>
          </a>
          <p className="font-display text-[#706F6F]">Twitter</p>
        </div>
        <div className="flex items-center gap-3 border p-4 rounded-b-lg">
          <a href="">
            <FaInstagram className="w-11 h-6 text-red-600"></FaInstagram>
          </a>
          <p className="font-display text-red-600">Instagram</p>
        </div>
      </div>
    </div>
  );
}

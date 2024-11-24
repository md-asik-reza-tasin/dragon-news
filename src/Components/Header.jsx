import moment from "moment";
import img from "../../src/assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <img src={img} alt="" />
      <p className="mt-4 text-[#706F6F] font-display">Journalism Without Fear or Favour</p>
      <p className="mt-2">{moment().format('dddd')} <span className="text-[#706F6F]">{moment().format('MMMM D, YYYY')}</span></p>
    </div>
  );
}

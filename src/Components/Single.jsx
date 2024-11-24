import { useContext } from "react";
import { AuthContextApi } from "../AuthContext/AuthContext";
import { FaCalendar } from "react-icons/fa";

export default function Single({ sc }) {
  const { a } = useContext(AuthContextApi);

  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = sc;

  return (
    <div className="mt-5 mr-3">
      <img src={image_url} className="rounded-md" alt="" />
      <h1 className="mt-3 font-semibold font-display text-[#706F6F]">
        {title}
      </h1>
      <div className="flex items-center gap-3 mt-5">
        {a.map((cat, idx) => (
          <p key={idx} className="font-display text-[#706F6F]">{cat.name}</p>
        ))}
        <FaCalendar className="text-[#706F6F]"></FaCalendar>
        <p className="text-[#706F6F]">{author.published_date?.slice(0, 10)}</p>
      </div>
    </div>
  );
}

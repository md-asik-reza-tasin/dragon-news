import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { AuthContextApi } from "../AuthContext/AuthContext";

export default function New({ n }) {
  const [readMore, setReadMore] = useState(300);
  const {handleReadMore} = useContext(AuthContextApi);

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
  } = n;

  // console.log(_id);

  return (
    <div className="w-[558px] my-5 border">
      <div className="w-full h-[80px] bg-[#F3F3F3] flex justify-between items-center px-4">
        <div className="flex items-center gap-2 px-2 py-3">
          <img src={author.img} className="w-10 h-10 rounded-full" alt="" />
          <div>
            <p className="text-[#706F6F]">{author.name}</p>
            <p className="text-[#706F6F]">{author.published_date?.slice(0,10)}</p>
          </div>
        </div>
        <div className="flex">
          <CiBookmark className="w-10 h-7 text-[#706F6F]" />
          <CiShare2 className="w-10 h-7 text-[#706F6F]" />
        </div>
      </div>
      <h1 className="text-3xl font-display font-bold mt-4 px-4 text-[#403F3F]">
        {title}
      </h1>
      <img src={image_url} className="mt-5 px-4" alt="" />
      <p className="px-4 text-[#706F6F] mt-4 mb-5">

        {
          details.length > 200 ? details.slice(0, 200) : details
        }
        
        <Link onClick={() => {
          handleReadMore(_id)
        }} to={`/details/${_id}`} className="text-[#FF8C47] font-bold ml-2">{ details.length > 200 ? 'read more' : ''}</Link>
        
      </p>
      <div className="flex justify-between px-4 py-4 border-t">
        <div className="flex items-center gap-2">
          <Rating
            name="half-rating"
            defaultValue={rating.number}
            precision={0.5}
          />
          <p className="font-display font-semibold text-[#706F6F]">
            {rating.number}
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#706F6F]">
          <LiaEyeSolid />
          {total_view}
        </div>
      </div>
    </div>
  );
}


{/* {details.slice(0, readMore)}{" "}
        <span
          onClick={() => {
            setReadMore(details.length);
          }}
          className="text-[#FF8C47] font-bold"
        >
          {details.length === readMore ? " " : "read more"}
        </span> */}
import { Link } from "react-router-dom";

export default function Detail({ sd }) {
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
  } = sd;

  console.log(sd)

  return <div className="border rounded-md p-7 mt-5">
    <img src={image_url} className="w-full" alt="" />
    <h1 className="text-4xl font-bold font-display text-[#403F3F] opacity-75 mt-5">{title}</h1>
    <p className="opacity-85 mt-6 mb-6">{details}</p>
    <Link to='/' className="w-[244px] bg-[#D72050] text-white px-5 p-3">All news in this category</Link>
  </div>;
}

import { useContext, useEffect, useState } from "react";
import New from "./New";
import { AuthContextApi } from "../AuthContext/AuthContext";

export default function News() {
  // const [news, setNews] = useState([]);
  const [all, setAll] = useState([]);
  // const [cut, setCut] = useState(4);

  const { news, setCut } = useContext(AuthContextApi);

  // const { singleData } = useContext(AuthContextApi)

  // useEffect(() => {
  //   fetch("news.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAll(data);
  //       setNews(data.slice(0, cut));
  //     });
  // }, [cut]);

  return (
    <div className="flex flex-col">
      <h1 className="font-display font-semibold">Dragon News Home</h1>
      {news?.map((n) => (
        <New key={n._id} n={n}></New>
      ))}
      <button
        onClick={() => {
          const a = all.length;
          setCut(a);
          console.log(a);
        }}
        className="bg-slate-200 rounded-2xl px-5 py-1 text-black btn-neutral mb-5 "
      >
        see more
      </button>
    </div>
  );
}

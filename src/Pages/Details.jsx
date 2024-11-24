import { useContext } from "react";
import Header from "../Components/Header";
import RightBar from "../Components/RightBar";
import { AuthContextApi } from "../AuthContext/AuthContext";
import Detail from "../Components/Detail";

export default function Details() {
  const { singleData } = useContext(AuthContextApi);
  console.log(singleData);

  return (
    <div>
      <Header></Header>

      <div className="grid grid-cols-4 mt-10 gap-5">
        <div className="col-span-3 ">
            <h1 className="text-2xl font-display font-bold text-[#403F3F]">Dragon News</h1>
          {singleData?.map((sd) => (
            <Detail key={sd?._id} sd={sd}></Detail>
          ))}
        </div>
        <div>
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
}

import LeftBar from "./LeftBar";
import News from "./News";
import RightBar from "./RightBar";

export default function MainContent() {
  return (
    <div className="mt-10 grid grid-cols-4">
      <div>
        <LeftBar></LeftBar>
      </div>
      <div className=" col-span-2">
        <News></News>
      </div>
      <div>
        <RightBar></RightBar>
      </div>
    </div>
  );
}

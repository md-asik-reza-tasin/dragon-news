import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  return (
    <div className="bg-[#F3F3F3] mt-8 p-5 flex gap-5">
      <button className="w-[110px] h-[48px] bg-[#D72050] text-white">
        Latest
      </button>
      <Marquee>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
}

import imgImage11 from "figma:asset/78971f239881e799aec001453e391fedb2af4993.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[632px] left-[255px] top-[205px] w-[847px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[40px] leading-[normal] left-[255px] not-italic text-[50px] text-[red] top-[95px] w-[1056px]">{`Küçük ekranda yatay scroll çok kjötü `}</p>
    </div>
  );
}
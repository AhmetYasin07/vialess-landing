import imgScreenReplaceHere1 from "figma:asset/97105b53b2b34a09c99c165d1e6e47e6bd51399c.png";
import imgLens from "figma:asset/bcee4a09a30f54352f6090ea2fa225e35b436522.png";
import { imgScreenReplaceHere } from "./svg-bov1i";

function Screen() {
  return (
    <div className="absolute contents inset-[1.89%_4.45%_1.81%_4.7%]" data-name="Screen">
      <div className="absolute inset-[1.89%_4.45%_1.81%_4.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1096px_2392px]" data-name="Screen (Replace here)" style={{ maskImage: `url('${imgScreenReplaceHere}')` }}>
        <img alt="" className="block max-w-none size-full" height="2392" src={imgScreenReplaceHere1} width="1096" />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute contents inset-[0_0.89%_0_0.98%]" data-name="Body">
      <div className="absolute bg-black border-[#4f5179] border-[12.824px] border-solid inset-[0.09%_1.16%_0.09%_1.24%] rounded-[169.678px]" data-name="Screen Background">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0.986px_14.797px_#3f3f3f]" />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] border-[#474970] border-[1.973px] border-solid inset-[0_0.89%_0_0.98%] rounded-[169.678px]" data-name="Stroke Body Outside">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0.986px_4.932px_#001a27]" />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] border-[#9f9fc5] border-[3.946px] border-solid inset-[0.09%_1.16%_0.09%_1.24%] rounded-[169.678px]" data-name="Stroke Body">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0.986px_4.932px_#afb0ab]" />
      </div>
      <Screen />
    </div>
  );
}

function Antennas() {
  return (
    <div className="absolute contents inset-[0_0.9%_0_0.98%]" data-name="Antennas">
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[99.31%_77.92%_0_20.77%]" data-name="Bottom" />
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[89.4%_97.63%_10.04%_0.98%]" data-name="Left-Bottom" />
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[10.08%_97.55%_89.11%_0.98%]" data-name="Left-Top" />
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[89.4%_0.9%_10.04%_97.63%]" data-name="Right-Bottom" />
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[10.12%_0.9%_89.11%_97.63%]" data-name="Right" />
      <div className="absolute bg-[rgba(115,115,167,0.52)] inset-[0_20.44%_99.31%_78%]" data-name="Top" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents inset-[19.33%_0_55.94%_0]" data-name="Buttons">
      <div className="absolute bg-[#4f5179] border-[#aaaacd] border-[1.48px] border-solid inset-[36.25%_99.02%_55.94%_0] rounded-[3.946px]" data-name="- Button">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.959px_0px_0px_#9f9fc5,inset_0px_2.959px_0px_0px_#9f9fc5,inset_0px_7.892px_1.973px_0px_#41423c,inset_0px_-7.892px_1.973px_0px_#41423c,inset_-4.932px_0px_3.946px_0px_#9f9fc5,inset_-4.932px_0px_0px_0px_#dadbd6]" />
      </div>
      <div className="absolute bg-[#4f5179] border-[#aaaacd] border-[1.48px] border-solid inset-[26.7%_99.02%_65.41%_0] rounded-[3.946px]" data-name="+ Button">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.959px_0px_0px_#9f9fc5,inset_0px_2.959px_0px_0px_#9f9fc5,inset_0px_7.892px_1.973px_0px_#41423c,inset_0px_-7.892px_1.973px_0px_#41423c,inset_-4.932px_0px_3.946px_0px_#9f9fc5,inset_-4.932px_0px_0px_0px_#dadbd6]" />
      </div>
      <div className="absolute bg-[#4f5179] border-[#aaaacd] border-[1.48px] border-solid inset-[19.33%_99.02%_76.42%_0] rounded-[3.946px]" data-name="Silence Button">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.959px_0px_0px_#9f9fc5,inset_0px_2.959px_0px_0px_#9f9fc5,inset_0px_7.892px_1.973px_0px_#41423c,inset_0px_-7.892px_1.973px_0px_#41423c,inset_-4.932px_0px_3.946px_0px_#9f9fc5,inset_-4.932px_0px_0px_0px_#dadbd6]" />
      </div>
      <div className="absolute bg-[#4f5179] border-[#aaaacd] border-[1.48px] border-solid inset-[29.33%_0_58.69%_99.02%] rounded-[3.946px]" data-name="Power Button">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2.959px_0px_0px_#9f9fc5,inset_0px_2.959px_0px_0px_#9f9fc5,inset_0px_7.892px_1.973px_0px_#41423c,inset_0px_-7.892px_1.973px_0px_#41423c,inset_-4.932px_0px_3.946px_0px_#9f9fc5,inset_-4.932px_0px_0px_0px_#dadbd6]" />
      </div>
    </div>
  );
}

function FrontCamera() {
  return (
    <div className="absolute contents inset-[3.4%_38.13%_93.32%_37.59%]" data-name="Front Camera">
      <div className="absolute bg-[#0a0a0a] inset-[3.4%_38.13%_93.32%_37.59%] rounded-[38.653px]" data-name="Rectangle" />
      <div className="absolute inset-[3.4%_38.13%_93.32%_55.12%]" data-name="Lens 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.4464 81.4464">
          <circle cx="40.7232" cy="40.7232" fill="var(--fill-0, #0A0A0A)" id="Lens 1" r="40.7232" />
        </svg>
      </div>
      <div className="absolute inset-[4.17%_39.69%_94.04%_56.69%] opacity-70" data-name="Lens">
        <div className="absolute inset-[-3.27%_-3.33%]">
          <img alt="" className="block max-w-none size-full" height="47.448" src={imgLens} width="46.616" />
        </div>
      </div>
      <div className="absolute flex inset-[4.17%_41.65%_94.04%_58.35%] items-center justify-center">
        <div className="flex-none h-px rotate-90 w-[44.534px]">
          <div className="relative size-full" data-name="Line">
            <div className="absolute inset-[-3.64px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.5341 3.64191">
                <line id="Line" opacity="0.7" stroke="var(--stroke-0, black)" strokeWidth="3.64191" x2="44.5341" y1="1.82096" y2="1.82096" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute contents inset-[0.97%_42.54%_98.46%_43.12%]" data-name="Notch">
      <div className="absolute bg-[#141414] border-[#0e0e0e] border-[1.036px] border-solid inset-[0.97%_42.54%_98.46%_43.12%] rounded-[31.07px]" data-name="Top Speaker">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-3.107px_0px_0px_0px_#2a2a2a,inset_3.107px_0px_0px_0px_#2a2a2a,inset_0px_0px_5.178px_1.036px_black]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[1.2] relative shrink-0 text-[36px] text-white tracking-[1.44px]">Örnek Profil</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#6c63ff] content-stretch flex flex-col items-start px-[45px] py-[9px] relative size-full">
      <Frame />
    </div>
  );
}

function IPhone14ProMax() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2484px] left-[calc(50%+0.24px)] shadow-[0px_-26px_114px_0px_rgba(0,0,0,0.1),0px_-76px_80px_0px_rgba(255,255,255,0.1),0px_164px_250px_0px_rgba(0,0,0,0.15),0px_74px_74px_0px_rgba(0,0,0,0.25)] top-1/2 w-[1206.486px]" data-name="iPhone 14 Pro Max">
      <Body />
      <Antennas />
      <Buttons />
      <FrontCamera />
      <Notch />
      <div className="absolute flex inset-[-6.07%_-15.31%_80.58%_62.83%] items-center justify-center">
        <div className="flex-none h-[82px] rotate-45 w-[813.479px]">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <IPhone14ProMax />
    </div>
  );
}
import svgPaths from "./svg-kpm57vdgao";
import clsx from "clsx";
import imgRefErigo1 from "figma:asset/6b9ced7fcada32db1fdc0015fbba6a94eb87abd1.png";
type Text3Props = {
  additionalClassNames?: string;
};

function Text3({ children, additionalClassNames = "" }: React.PropsWithChildren<Text3Props>) {
  return (
    <div className={clsx("h-[16.314px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}

function Icon3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14.286px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2857 14.2857">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <Icon3>
      <path d={svgPaths.p32544840} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
      <path d="M7.14286 10.7143H7.14881" id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
    </Icon3>
  );
}

function Text() {
  return (
    <Text3 additionalClassNames="w-[80.918px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9810fa] text-[12px] text-nowrap">{`NFC & QR Kod`}</p>
    </Text3>
  );
}

function Container() {
  return (
    <div className="bg-[#f3e8ff] content-stretch flex gap-[6.122px] h-[24.477px] items-center pl-[10.204px] pr-0 py-0 relative rounded-[2.68435e+07px] shrink-0 w-[121.735px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <Icon3>
      <path d={svgPaths.pa1c3f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
    </Icon3>
  );
}

function Text1() {
  return (
    <Text3 additionalClassNames="w-[80.753px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#155dfc] text-[12px] text-nowrap">Suya Dayanıklı</p>
    </Text3>
  );
}

function Container1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex gap-[6.122px] h-[24.477px] items-center pl-[10.204px] pr-0 py-0 relative rounded-[2.68435e+07px] shrink-0 w-[121.569px]" data-name="Container">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Icon2() {
  return (
    <Icon3>
      <path d={svgPaths.p3dc3d180} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
      <path d={svgPaths.p3475d428} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
    </Icon3>
  );
}

function Text2() {
  return (
    <Text3 additionalClassNames="w-[67.564px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00a63e] text-[12px] text-nowrap">Çevre Dostu</p>
    </Text3>
  );
}

function Container2() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[6.122px] h-[24.477px] items-center pl-[10.204px] pr-0 py-0 relative rounded-[2.68435e+07px] shrink-0 w-[108.38px]" data-name="Container">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start px-[16px] py-0 relative w-full">
          <Container />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[33.457px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(108,99,255,0.35)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-0 pt-[0.8px] px-0 relative size-full">
          <p className="basis-0 font-['Arial:Bold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#6c63ff] text-[12px] text-center">Firmana Özel Tasarım Yaptır →</p>
        </div>
      </div>
    </div>
  );
}

export default function Container5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16.327px] items-center pb-0 pt-[16px] px-0 relative rounded-[24px] size-full" data-name="Container">
      <div className="h-[124.471px] relative shadow-[4px_5px_6.1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[197.8px]" data-name="ref_erigo-1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRefErigo1} />
      </div>
      <Container3 />
      <Container4 />
    </div>
  );
}
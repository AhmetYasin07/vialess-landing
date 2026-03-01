import svgPaths from "./svg-34rowzmasc";
import { imgGroup, imgGroup1 } from "./svg-66cga";

function Group() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-0 mask-position-[0px,_0px] mask-size-[167px_167px,_167px_167px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167 167">
        <g filter="url(#filter0_i_83_79)" id="Group">
          <path d="M167 0H0V167H167V0Z" fill="url(#paint0_linear_83_79)" id="Vector" />
          <path d="M167 0H0V167H167V0Z" fill="var(--fill-0, white)" id="Vector_2" />
          <g filter="url(#filter1_di_83_79)" id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p160a6f00} fill="var(--fill-0, #6C63FF)" fillRule="evenodd" id="Vector_3" />
          </g>
          <g filter="url(#filter2_d_83_79)" id="Group_3">
            <path clipRule="evenodd" d={svgPaths.p330e3680} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="175.35" id="filter0_i_83_79" width="167" x="0" y="-8.35">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-8.35" />
            <feGaussianBlur stdDeviation="27.8333" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.533333 0 0 0 0 0.341176 0 0 0 0 0.917647 0 0 0 0.15 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_83_79" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="114.779" id="filter1_di_83_79" width="82.273" x="66.0002" y="38.2708">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="5.56667" />
            <feGaussianBlur stdDeviation="3.47917" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 0.17 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_83_79" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_83_79" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-4.175" dy="-1.39167" />
            <feGaussianBlur stdDeviation="3.47917" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
            <feBlend in2="shape" mode="normal" result="effect2_innerShadow_83_79" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="81.8819" id="filter2_d_83_79" width="92.3338" x="18.7274" y="38.9153">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="5.56667" />
            <feGaussianBlur stdDeviation="3.47917" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 0.17 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_83_79" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_83_79" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_79" x1="83.5" x2="83.5" y1="0" y2="167">
            <stop stopColor="#8857EA" />
            <stop offset="1" stopColor="#7D27D9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

export default function Icon() {
  return (
    <div className="relative size-full" data-name="Icon 1">
      <MaskGroup />
    </div>
  );
}
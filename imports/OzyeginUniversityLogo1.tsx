import svgPaths from "./svg-lerohxg0qs";
import { imgGroup, imgGroup1 } from "./svg-7jbo3";

function Group3() {
  return (
    <div className="absolute inset-0 mask-position-[0px_0px,_0px_0px,_0px_0px,_-9.728px_-33.725px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup}'), url('${imgGroup}'), url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 38.9981">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p13534f70} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p37c05b00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p326bed80} fill="var(--fill-0, black)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pd8e4200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[-86.47%_-7.31%_-86.48%_-7.31%]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[-86.47%_-7.31%_-86.48%_-7.31%]" data-name="Group">
      <ClipPathGroup3 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup2 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup1 />
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

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <ClipPathGroup />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 2">
      <Layer />
    </div>
  );
}

export default function OzyeginUniversityLogo() {
  return (
    <div className="relative size-full" data-name="Özyeğin_University_logo 1">
      <Layer1 />
    </div>
  );
}
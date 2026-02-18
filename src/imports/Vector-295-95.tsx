import svgPaths from "./svg-fnp2w190ob";

export default function Vector({ color = "black" }: { color?: string }) {
  return (
    <div className="relative size-full" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.057 70.6101">
        <g id="Vector">
          <path d={svgPaths.pceb5f00} fill={color} fillOpacity="0.9" />
          <path d={svgPaths.p33025c00} fill={color} fillOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
import type { CSSProperties, ReactNode } from "react";

const COS = 0.866;
const SIN = 0.5;
const ORIGIN = { x: 150, y: 44 };

function project(x: number, y: number, z = 0) {
  return { x: ORIGIN.x + (x - y) * COS, y: ORIGIN.y + (x + y) * SIN - z };
}

function points(...corners: [number, number, number][]) {
  return corners
    .map(([x, y, z]) => {
      const p = project(x, y, z);
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    })
    .join(" ");
}

type PlateProps = {
  x: number;
  y: number;
  z?: number;
  size: number;
  depth?: number;
  height?: number;
  top?: string;
  stroke?: string;
  style?: CSSProperties;
  className?: string;
};

function Plate({ x, y, z = 0, size, depth = size, height = 6, top = "url(#plate)", stroke = "rgb(21 93 245 / 0.55)", style, className }: PlateProps) {
  const x2 = x + size;
  const y2 = y + depth;

  return (
    <g style={style} className={className} stroke={stroke} strokeWidth="0.75" strokeLinejoin="miter">
      <polygon points={points([x, y2, z + height], [x2, y2, z + height], [x2, y2, z], [x, y2, z])} fill="#c4d6fb" />
      <polygon points={points([x2, y, z + height], [x2, y2, z + height], [x2, y2, z], [x2, y, z])} fill="#e3ecfe" />
      <polygon points={points([x, y, z + height], [x2, y, z + height], [x2, y2, z + height], [x, y2, z + height])} fill={top} />
    </g>
  );
}

function IsoLabel({ x, y, z = 0, children, fill = "#0f46c2" }: { x: number; y: number; z?: number; children: ReactNode; fill?: string }) {
  const p = project(x, y, z);
  return (
    <text transform={`matrix(${COS} ${SIN} ${-COS} ${SIN} ${p.x} ${p.y})`} fontSize="7.5" fontWeight="600" fill={fill} letterSpacing="0.2">
      {children}
    </text>
  );
}

function Frame({ children, id }: { children: ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 300 214" aria-hidden="true" className="h-auto w-full" data-visual={id}>
      <defs>
        <linearGradient id="plate" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dbe7fe" />
        </linearGradient>
        <linearGradient id="plate-active" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#56b5f9" />
          <stop offset="1" stopColor="#155df5" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#155df5" stopOpacity="0.35" />
          <stop offset="1" stopColor="#155df5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="150" cy="125" rx="135" ry="76" fill="url(#glow)" />
      <g fill="none" stroke="#155df5" strokeOpacity="0.22" strokeWidth="0.75">
        <polygon points="150,48 290,125 150,202 10,125" />
        <path d="M80 86.5 220 163.5M220 86.5 80 163.5" strokeDasharray="2 4" />
      </g>
      <g fill="#155df5">
        {[[150, 48], [290, 125], [150, 202], [10, 125]].map(([cx, cy]) => <rect key={cx + "-" + cy} x={cx - 1.5} y={cy - 1.5} width="3" height="3" />)}
      </g>
      {children}
    </svg>
  );
}

function EngineeringVisual() {
  const layers = [
    { z: 0, label: "Dokumentace" },
    { z: 22, label: "Výpočty" },
    { z: 44, label: "Konstrukce" },
    { z: 66, label: "Design" },
  ];
  return (
    <Frame id="engineering">
      <g transform="translate(0 44)">
      {layers.map((layer, index) => (
        <g key={layer.label} className="iso-layer" style={{ "--layer": (index - 1.5) * -6 } as CSSProperties}>
          <Plate x={18} y={18} z={layer.z} size={92} height={5} top={index === 3 ? "url(#plate-active)" : "url(#plate)"} />
          <IsoLabel x={26} y={30} z={layer.z + 5} fill={index === 3 ? "#fff" : "#0f46c2"}>{layer.label}</IsoLabel>
        </g>
      ))}
      </g>
    </Frame>
  );
}

function ItVisual() {
  const nodes = [
    { x: 0, y: 44, label: "CAD" },
    { x: 66, y: 0, label: "PLM" },
    { x: 66, y: 88, label: "ERP" },
    { x: 132, y: 44, label: "App" },
  ];
  const line = (a: [number, number], b: [number, number]) => {
    const start = project(a[0] + 19, a[1] + 19, 10);
    const corner = project(b[0] + 19, a[1] + 19, 10);
    const end = project(b[0] + 19, b[1] + 19, 10);
    return `M${start.x} ${start.y} L${corner.x} ${corner.y} L${end.x} ${end.y}`;
  };
  const paths = [line([0, 44], [66, 0]), line([0, 44], [66, 88]), line([66, 0], [132, 44]), line([66, 88], [132, 44])];
  return (
    <Frame id="it">
      <g transform="translate(-37 30)">
        {paths.map((path, index) => (
          <g key={path} fill="none">
            <path d={path} stroke="rgb(21 93 245 / 0.35)" strokeWidth="1" />
            <path d={path} pathLength={100} stroke="#155df5" strokeWidth="1.75" className="dash-run" style={{ "--delay": `${index * 0.8}s` } as CSSProperties} />
          </g>
        ))}
        {nodes.map((node, index) => (
          <g key={node.label}>
            <Plate x={node.x} y={node.y} size={38} height={10} top={index === 3 ? "url(#plate-active)" : "url(#plate)"} />
            <IsoLabel x={node.x + 9} y={node.y + 23} z={10} fill={index === 3 ? "#fff" : "#0f46c2"}>{node.label}</IsoLabel>
          </g>
        ))}
      </g>
    </Frame>
  );
}

function AiVisual() {
  const cells = Array.from({ length: 25 }, (_, index) => ({ x: (index % 5) * 19, y: Math.floor(index / 5) * 19, index }));
  const beam = project(52, 52, 26);
  const top = project(52, 52, 92);
  return (
    <Frame id="ai">
      <g transform="translate(0 31)">
        <Plate x={0} y={0} size={104} height={14} />
        {cells.map((cell) => (
          <polygon
            key={cell.index}
            points={points([cell.x + 5, cell.y + 5, 15], [cell.x + 19, cell.y + 5, 15], [cell.x + 19, cell.y + 19, 15], [cell.x + 5, cell.y + 19, 15])}
            fill={cell.index % 7 === 3 ? "#9dc53d" : "#155df5"}
            className="twinkle"
            style={{ "--delay": `${(cell.index * 0.37) % 3.6}s` } as CSSProperties}
          />
        ))}
        <line x1={beam.x} y1={beam.y} x2={top.x} y2={top.y} stroke="#155df5" strokeWidth="1" strokeDasharray="3 3" />
        <Plate x={36} y={36} z={92} size={32} height={6} top="url(#plate-active)" className="iso-layer" style={{ "--layer": -4 } as CSSProperties} />
      </g>
    </Frame>
  );
}

function EducationVisual() {
  const steps = [
    { h: 66, label: "74 h" },
    { h: 48, label: "56 h" },
    { h: 34, label: "46 h" },
    { h: 12, label: "16 h" },
  ];
  return (
    <Frame id="vzdelavani">
      <g transform="translate(-39 44)">
        {steps.map((step, index) => (
          <g key={step.label}>
            <Plate x={index * 34} y={22} size={34} depth={52} height={step.h} top={index === 0 ? "url(#plate-active)" : "url(#plate)"} />
            <IsoLabel x={index * 34 + 9} y={52} z={step.h} fill={index === 0 ? "#fff" : "#0f46c2"}>{step.label}</IsoLabel>
          </g>
        ))}
      </g>
    </Frame>
  );
}

const visuals: Record<string, () => ReactNode> = {
  engineering: EngineeringVisual,
  it: ItVisual,
  ai: AiVisual,
  vzdelavani: EducationVisual,
};

export function ServiceVisual({ id }: { id: string }) {
  const Visual = visuals[id];
  return <Visual />;
}

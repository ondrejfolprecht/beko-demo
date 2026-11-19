import type { CSSProperties } from "react";
import { pencil, sample } from "@/lib/sketch";

const GROUND = 466;
const SILL = 410;
const REAR = { x: 250, y: 404 };
const FRONT = { x: 756, y: 404 };
const ARCH = 74;
const TIRE = 62;
const K = 0.5523;

function arch({ x, y }: { x: number; y: number }, r: number) {
  // Clockwise from the right side of the arch over the top to the left side.
  return `C${x + r} ${y - r * K} ${x + r * K} ${y - r} ${x} ${y - r}C${x - r * K} ${y - r} ${x - r} ${y - r * K} ${x - r} ${y}`;
}

// Low electric concept: a short tail, a fast roof line and a long tapered nose.
const TOP = "M60 378C50 350 50 320 66 298C180 272 290 204 440 170C530 152 612 180 700 240C760 281 872 300 952 330C966 340 964 364 944 386";
const SILHOUETTE = `${TOP}L${FRONT.x + ARCH} ${SILL - 6}${arch(FRONT, ARCH)}L${REAR.x + ARCH} ${SILL}${arch(REAR, ARCH)}L60 378`;

type Stroke = { d: string; width: number; tone: "ink" | "blue" | "sky" | "guide"; wobble?: number; overshoot?: number; start: number; duration: number };

const line = (x1: number, y1: number, x2: number, y2: number) => `M${x1} ${y1}L${x2} ${y2}`;

const guides: Stroke[] = [
  { d: line(4, GROUND, 996, GROUND), width: 1, tone: "guide", overshoot: 0, start: 0, duration: 0.8 },
  { d: line(REAR.x, 270, REAR.x, 512), width: 1, tone: "guide", overshoot: 0, start: 0.15, duration: 0.5 },
  { d: line(FRONT.x, 270, FRONT.x, 512), width: 1, tone: "guide", overshoot: 0, start: 0.25, duration: 0.5 },
  { d: line(150, 166, 860, 166), width: 1, tone: "guide", overshoot: 0, start: 0.35, duration: 0.7 },
  { d: line(0, 348, 1000, 286), width: 1, tone: "guide", overshoot: 0, start: 0.5, duration: 0.7 },
];

const outline: Stroke[] = [
  { d: TOP, width: 2.4, tone: "ink", wobble: 0.7, overshoot: 22, start: 0.9, duration: 1.5 },
  { d: TOP, width: 1.1, tone: "blue", wobble: 2.4, overshoot: 34, start: 1.2, duration: 1.3 },
  { d: TOP, width: 0.8, tone: "sky", wobble: 3.4, overshoot: 46, start: 1.5, duration: 1.1 },
  { d: `M${FRONT.x + ARCH} ${SILL - 6}${arch(FRONT, ARCH)}`, width: 2, tone: "ink", wobble: 0.7, overshoot: 8, start: 1.9, duration: 0.6 },
  { d: `M${REAR.x + ARCH} ${SILL}${arch(REAR, ARCH)}`, width: 2, tone: "ink", wobble: 0.7, overshoot: 8, start: 2.1, duration: 0.6 },
  { d: line(FRONT.x - ARCH, SILL, REAR.x + ARCH, SILL), width: 2.2, tone: "ink", wobble: 0.8, overshoot: 26, start: 2.3, duration: 0.4 },
  { d: `M${FRONT.x + ARCH} ${SILL - 6}L944 386`, width: 2, tone: "ink", overshoot: 12, start: 2.4, duration: 0.2 },
  { d: `M${REAR.x - ARCH} ${SILL - 4}L60 378`, width: 2, tone: "ink", overshoot: 8, start: 2.45, duration: 0.2 },
];

const details: Stroke[] = [
  // Side glass and pillar.
  { d: "M332 238C400 200 480 182 548 186C602 190 644 210 684 244C570 254 440 254 332 238", width: 1.7, tone: "ink", wobble: 0.7, overshoot: 12, start: 2.6, duration: 0.8 },
  { d: "M522 186L510 250", width: 1.4, tone: "blue", overshoot: 6, start: 2.9, duration: 0.2 },
  // Shoulder line, the longest gesture of the sketch.
  { d: "M44 330C300 286 640 272 990 326", width: 1.6, tone: "blue", wobble: 1.3, overshoot: 30, start: 3, duration: 0.8 },
  { d: "M70 316C300 278 640 262 930 306", width: 1, tone: "sky", wobble: 2.2, overshoot: 20, start: 3.1, duration: 0.7 },
  // Door cut and rising lower line.
  { d: "M510 250C506 300 506 352 514 410", width: 1.4, tone: "blue", overshoot: 4, start: 3.4, duration: 0.3 },
  { d: "M332 238C322 300 324 354 330 406", width: 1.4, tone: "blue", overshoot: 4, start: 3.5, duration: 0.3 },
  { d: "M344 392C460 360 570 352 682 340", width: 1.5, tone: "sky", wobble: 1.2, overshoot: 26, start: 3.6, duration: 0.4 },
  // Light signatures.
  { d: "M868 304C900 308 936 320 954 336C916 336 884 324 868 304", width: 1.9, tone: "ink", wobble: 0.5, overshoot: 4, start: 3.7, duration: 0.4 },
  { d: "M64 312C100 302 142 292 198 280", width: 2.6, tone: "ink", wobble: 0.5, overshoot: 4, start: 3.8, duration: 0.3 },
  // Wheels.
  ...[REAR, FRONT].flatMap(({ x, y }, index) => {
    const circle = (r: number) => `M${x + r} ${y}${arch({ x, y }, r)}C${x - r} ${y + r * K} ${x - r * K} ${y + r} ${x} ${y + r}C${x + r * K} ${y + r} ${x + r} ${y + r * K} ${x + r} ${y}`;
    const offset = index * 0.25;
    const spokes = [0, 1, 2, 3, 4, 5, 6].map((spoke): Stroke => {
      const angle = (spoke / 7) * Math.PI * 2 - Math.PI / 2;
      // Spokes lean to one side, so the wheel looks like a turbine in motion.
      return {
        d: line(x + Math.cos(angle) * 11, y + Math.sin(angle) * 11, x + Math.cos(angle + 0.42) * 42, y + Math.sin(angle + 0.42) * 42),
        width: 1.2,
        tone: "blue",
        wobble: 0.2,
        overshoot: 0,
        start: 4.2 + offset + spoke * 0.03,
        duration: 0.12,
      };
    });
    return [
      { d: circle(TIRE), width: 2.4, tone: "ink", wobble: 0.7, overshoot: 10, start: 3.9 + offset, duration: 0.45 },
      { d: circle(TIRE + 1), width: 0.9, tone: "blue", wobble: 1.5, overshoot: 16, start: 4 + offset, duration: 0.4 },
      { d: circle(43), width: 1.2, tone: "blue", wobble: 0.5, overshoot: 6, start: 4 + offset, duration: 0.4 },
      { d: circle(10), width: 1.2, tone: "blue", wobble: 0.2, overshoot: 0, start: 4.1 + offset, duration: 0.2 },
      ...spokes,
    ] satisfies Stroke[];
  }),
];

// Quick parallel hatching: glass reflection, door shading and the ground shadow.
const hatching: Stroke[] = [
  ...Array.from({ length: 11 }, (_, i): Stroke => ({ d: line(392 + i * 11, 246, 426 + i * 11, 204), width: 0.9, tone: "sky", wobble: 0.4, overshoot: 0, start: 4.7 + i * 0.03, duration: 0.09 })),
  ...Array.from({ length: 22 }, (_, i): Stroke => ({ d: line(352 + i * 14, 406, 372 + i * 14, 372 - i * 0.7), width: 0.9, tone: "sky", wobble: 0.4, overshoot: 0, start: 4.9 + i * 0.015, duration: 0.07 })),
  ...Array.from({ length: 50 }, (_, i): Stroke => ({ d: line(92 + i * 16.6, 480, 112 + i * 16.6, GROUND), width: 0.9, tone: "guide", wobble: 0.3, overshoot: 0, start: 5 + i * 0.008, duration: 0.05 })),
];

const strokes = [...guides, ...outline, ...details, ...hatching].map((stroke, index) => ({
  ...stroke,
  path: pencil(stroke.d, { seed: index + 1, wobble: stroke.wobble ?? 1, overshoot: stroke.overshoot ?? 10 }),
}));

const toneClass: Record<Stroke["tone"], string> = {
  ink: "stroke-[#10234f]",
  blue: "stroke-blue",
  sky: "stroke-sky",
  guide: "stroke-blue/30",
};

/** CAD surface: the roof line sampled and blended down to the sill, closed by verticals and diagonals. */
function buildMesh() {
  const top = sample(TOP, 6);
  const roofAt = (x: number) => top.reduce((best, point) => (Math.abs(point[0] - x) < Math.abs(best[0] - x) ? point : best), top[0])[1];
  const columns = Array.from({ length: 36 }, (_, i) => 52 + i * 26);
  const rows = 8;
  const y = (x: number, row: number) => roofAt(x) + (SILL + 6 - roofAt(x)) * (row / rows);
  let d = "";
  for (let row = 0; row <= rows; row++) {
    d += columns.map((x, i) => `${i ? "L" : "M"}${x} ${y(x, row).toFixed(1)}`).join("");
  }
  columns.forEach((x, i) => {
    d += `M${x} ${y(x, 0).toFixed(1)}L${x} ${y(x, rows).toFixed(1)}`;
    if (i < columns.length - 1) {
      for (let row = 0; row < rows; row++) {
        const next = columns[i + 1];
        d += `M${x} ${y(x, row).toFixed(1)}L${next} ${y(next, row + 1).toFixed(1)}`;
      }
    }
  });
  return d;
}

const mesh = buildMesh();

/** CAD curvature comb along the roof line: bristles grow with the local bend of the curve. */
function buildComb() {
  const top = sample("M66 298C180 272 290 204 440 170C530 152 612 180 700 240C760 281 872 300 952 330", 14);
  let bristles = "";
  let envelope = "";
  const WINDOW = 3;
  const heading = (from: number[], to: number[]) => Math.atan2(to[1] - from[1], to[0] - from[0]);
  for (let i = WINDOW; i < top.length - WINDOW; i++) {
    const bend = Math.abs(heading(top[i], top[i + WINDOW]) - heading(top[i - WINDOW], top[i]));
    const length = 10 + Math.min(bend * 90, 34);
    const normal = heading(top[i - 1], top[i + 1]) - Math.PI / 2;
    const tip = [top[i][0] + Math.cos(normal) * length, top[i][1] + Math.sin(normal) * length];
    bristles += `M${top[i][0].toFixed(1)} ${top[i][1].toFixed(1)}L${tip[0].toFixed(1)} ${tip[1].toFixed(1)}`;
    envelope += `${envelope ? "L" : "M"}${tip[0].toFixed(1)} ${tip[1].toFixed(1)}`;
  }
  return { bristles, envelope };
}

const comb = buildComb();

export function HeroSketch({ stages }: { stages: string[] }) {
  return (
    <figure aria-label="Animovaná skica konceptu vozidla, která se mění na 3D model a výpočetní síť" className="relative">
      <svg viewBox="0 0 1000 540" className="h-auto w-full overflow-visible" role="img" aria-hidden="true">
        <defs>
          <clipPath id="sketch-body"><path d={SILHOUETTE} /></clipPath>
          <linearGradient id="sketch-heat" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0.05" stopColor="#155df5" />
            <stop offset="0.35" stopColor="#56b5f9" />
            <stop offset="0.55" stopColor="#9dc53d" />
            <stop offset="0.72" stopColor="#f8d347" />
            <stop offset="0.95" stopColor="#dd4754" />
          </linearGradient>
        </defs>

        <g clipPath="url(#sketch-body)">
          <rect x="40" y="140" width="940" height="290" fill="url(#sketch-heat)" className="sketch-heat" />
          <path d={mesh} fill="none" stroke="#155df5" strokeWidth="0.7" className="sketch-mesh" />
        </g>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {strokes.map((stroke, index) => (
            <path
              key={index}
              d={stroke.path}
              pathLength={1}
              strokeWidth={stroke.width}
              className={`sketch-stroke ${toneClass[stroke.tone]}`}
              style={{ "--start": `${stroke.start}s`, "--length": `${stroke.duration}s` } as CSSProperties}
            />
          ))}
        </g>

        <g fill="none" className="sketch-comb">
          <path d={comb.bristles} stroke="#155df5" strokeWidth="0.8" strokeOpacity="0.6" />
          <path d={comb.envelope} stroke="#dd4754" strokeWidth="1.2" />
        </g>
        <rect x="30" y="100" width="2" height="390" fill="#155df5" className="sketch-scan" />

        {/* Technical annotation: real design terms with no made-up figures. */}
        <g className="sketch-note font-mono" fontSize="13" fill="#0f46c2">
          <path d={`M${REAR.x} 514H${FRONT.x}M${REAR.x} 506V522M${FRONT.x} 506V522`} stroke="#155df5" fill="none" />
          <rect x="468" y="503" width="70" height="22" fill="#fff" fillOpacity="0.85" />
          <text x="503" y="519" textAnchor="middle">rozvor</text>
          <path d="M440 170L440 96H530" stroke="#155df5" fill="none" />
          <rect x="438.5" y="168.5" width="3" height="3" />
          <text x="448" y="88">střešní linie</text>
          <path d="M884 308L914 226H992" stroke="#155df5" fill="none" />
          <rect x="882.5" y="306.5" width="3" height="3" />
          <text x="918" y="218">světlomet</text>
          <path d="M120 308L72 238H4" stroke="#155df5" fill="none" />
          <rect x="118.5" y="306.5" width="3" height="3" />
          <text x="4" y="230">ramenní linie</text>
        </g>
      </svg>

      <figcaption className="mt-3 flex flex-wrap gap-1.5 lg:absolute lg:top-0 lg:right-(--gutter) lg:mt-0">
        {stages.map((stage, index) => (
          <span key={stage} className="sketch-chip flex h-8 items-center border border-blue/25 bg-white/60 px-3 text-[13px] font-medium text-ink backdrop-blur-md" data-stage={index}>
            {stage}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

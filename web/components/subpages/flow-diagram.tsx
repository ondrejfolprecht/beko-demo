import type { CSSProperties } from "react";

const NODE_WIDTH = 54;
const ROW = 100 / 5;

/** Staircase of connected steps, echoing the stepped mosaic edge of the hero. */
export function FlowDiagram({ steps }: { steps: readonly string[] }) {
  const stepX = (100 - NODE_WIDTH) / Math.max(steps.length - 1, 1);
  const cycle = steps.length * 1.5;

  return (
    <div aria-hidden="true" className="relative h-[19rem] w-full sm:h-[21rem]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
        {steps.slice(1).map((_, index) => {
          const fromX = index * stepX + 5;
          const fromY = index * ROW + ROW * 0.72;
          const toX = (index + 1) * stepX;
          const toY = (index + 1) * ROW + ROW * 0.36;
          const path = `M${fromX} ${fromY} V${toY} H${toX}`;
          return (
            <g key={index} fill="none" vectorEffect="non-scaling-stroke">
              <path d={path} stroke="rgb(255 255 255 / 0.35)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path
                d={path}
                pathLength={100}
                stroke="#fff"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                className="dash-run"
                style={{ "--delay": `${index * 1.5 + 0.6}s`, animationDuration: `${cycle}s` } as CSSProperties}
              />
            </g>
          );
        })}
      </svg>
      {steps.map((step, index) => (
        <span
          key={step}
          className="flow-node absolute flex items-center border border-white/35 bg-white/14 px-3 text-[13px] font-medium text-white backdrop-blur-md sm:text-[15px]"
          style={{
            left: `${index * stepX}%`,
            top: `${index * ROW}%`,
            width: `${NODE_WIDTH}%`,
            height: `${ROW * 0.72}%`,
            "--delay": `${index * 1.5}s`,
            "--cycle": `${cycle}s`,
          } as CSSProperties}
        >
          {step}
        </span>
      ))}
    </div>
  );
}

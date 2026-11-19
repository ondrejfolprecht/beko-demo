/**
 * Turns clean Bézier curves into hand-drawn pencil strokes: the line wobbles slightly
 * and overshoots its ends. Seeded, so server output stays stable between renders.
 */
type Point = [number, number];

function parse(d: string) {
  const tokens = d.match(/[MCL]|-?\d+(?:\.\d+)?/g) ?? [];
  const segments: Point[][] = [];
  let index = 0;
  let current: Point = [0, 0];
  let command = "M";
  const read = (): Point => [Number(tokens[index++]), Number(tokens[index++])];

  while (index < tokens.length) {
    if (/[MCL]/.test(tokens[index])) command = tokens[index++];
    if (command === "M") current = read();
    else if (command === "L") {
      const end = read();
      segments.push([current, end]);
      current = end;
    } else {
      const c1 = read();
      const c2 = read();
      const end = read();
      segments.push([current, c1, c2, end]);
      current = end;
    }
  }
  return segments;
}

function at(segment: Point[], t: number): Point {
  if (segment.length === 2) {
    const [a, b] = segment;
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  }
  const [a, b, c, d] = segment;
  const u = 1 - t;
  const w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [w[0] * a[0] + w[1] * b[0] + w[2] * c[0] + w[3] * d[0], w[0] * a[1] + w[1] * b[1] + w[2] * c[1] + w[3] * d[1]];
}

export function sample(d: string, spacing = 14) {
  const points: Point[] = [];
  for (const segment of parse(d)) {
    const rough = Math.hypot(segment[segment.length - 1][0] - segment[0][0], segment[segment.length - 1][1] - segment[0][1]);
    const steps = Math.max(2, Math.ceil(rough / spacing));
    for (let i = points.length ? 1 : 0; i <= steps; i++) points.push(at(segment, i / steps));
  }
  return points;
}

export function pencil(d: string, { seed = 1, wobble = 1.1, overshoot = 10 } = {}) {
  const points = sample(d);
  const first = points[0];
  const second = points[1];
  const last = points[points.length - 1];
  const previous = points[points.length - 2];
  const extend = (from: Point, to: Point): Point => {
    const length = Math.hypot(to[0] - from[0], to[1] - from[1]) || 1;
    return [to[0] + ((to[0] - from[0]) / length) * overshoot, to[1] + ((to[1] - from[1]) / length) * overshoot];
  };
  const line = overshoot ? [extend(second, first), ...points, extend(previous, last)] : points;

  return line
    .map(([x, y], index) => {
      const dx = (Math.sin(index * 0.73 + seed * 1.7) + Math.sin(index * 0.31 + seed)) * wobble * 0.5;
      const dy = (Math.cos(index * 0.61 + seed * 2.3) + Math.sin(index * 0.23 + seed * 0.7)) * wobble * 0.5;
      return `${index ? "L" : "M"}${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`;
    })
    .join("");
}

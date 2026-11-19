import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the same mosaic as app/icon.svg, drawn at the size phones ask for. */
export default function AppleIcon() {
  const tile = (left: number, top: number, side: number, background: string) => (
    <div style={{ position: "absolute", left, top, width: side, height: side, background }} />
  );
  return new ImageResponse(
    (
      <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", background: "#155df5" }}>
        {tile(90, 0, 90, "#f8d347")}
        {tile(0, 90, 90, "#dd4754")}
        {tile(90, 90, 45, "#9dc53d")}
        {tile(135, 135, 45, "#56b5f9")}
      </div>
    ),
    size,
  );
}

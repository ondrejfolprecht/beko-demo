import type { MetadataRoute } from "next";

/** Name, colours and icons a phone uses when the site is saved to the home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BEKO Engineering",
    short_name: "BEKO",
    lang: "cs",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#155df5",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  {
    // Vendored from the mapcn registry, kept close to upstream to stay updatable.
    files: ["components/ui/map.tsx"],
    rules: { "react-hooks/refs": "off", "react-hooks/set-state-in-effect": "off" },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored MapLibre worker.
    "public/maplibre/**",
  ]),
]);

export default eslintConfig;

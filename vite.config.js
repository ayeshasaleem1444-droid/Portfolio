import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths so the build works on GitHub Pages project sites and any static host
  base: "Portfolio",
});

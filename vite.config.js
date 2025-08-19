import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages will serve under /dev_portfolio/
  base: "/dev_portfolio/",
  plugins: [react()],
});

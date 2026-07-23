import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base is required so built assets load inside the Capacitor
// Android WebView (which serves from a local file/https origin).
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1500,
  },
});

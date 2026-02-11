import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/pet-club/" : "/",
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-dom") || id.includes("react")) return "react-vendor";
          if (id.includes("lucide-react")) return "icons-vendor";
          if (id.includes("fuse.js")) return "search-vendor";
          return "vendor";
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
}));

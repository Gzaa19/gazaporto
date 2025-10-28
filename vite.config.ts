import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8081,
  },
  plugins: [
    react(),
    viteCompression({ algorithm: "gzip", ext: ".gz", threshold: 0 }),
    viteCompression({ algorithm: "brotliCompress", ext: ".br", threshold: 0 }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const parts = id.toString().split("node_modules/");
            if (parts[1]) {
              return parts[1].split("/")[0].toString();
            }
          }
        },
      },
    },
  },
}));

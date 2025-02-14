import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        entryFileNames: "build.js",
      },
    },
  },
  server: {
    open: true,
  },
  define: {
    "process.env": process.env,
  },
});

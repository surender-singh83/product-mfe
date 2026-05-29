import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "product_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductApp": "./src/pages/ProductApp",
        "./StoreProvider": "./src/redux/store.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "tailwindcss", 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: true,
    cssCodeSplit: false,

  },
  server: {
    port: 3001,
    cors: true,
    origin: "http://localhost:3001"
  },
});

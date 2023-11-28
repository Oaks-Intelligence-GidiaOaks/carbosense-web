import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      VITE_SECURE_LOCAL_STORAGE_HASH_KEY: "oaks_intelligence-2022",
      VITE_SECURE_LOCAL_STORAGE_PREFIX: "cs",
    },
  },
});

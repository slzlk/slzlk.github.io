import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  // Relative paths support domain roots and static subdirectory deployments.
  base: loadEnv(mode, ".", "").VITE_BASE_PATH || "./",
}));

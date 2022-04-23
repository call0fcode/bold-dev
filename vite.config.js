import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/abstracts/variables";
          @import "./src/scss/abstracts/mixins";
          @import "./src/scss/base/typography";
          @import "./src/scss/base/globals";
        `,
      },
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    typecheck: {
      enabled: true
    },
    globals: true,
    environment: "node"
  }
});

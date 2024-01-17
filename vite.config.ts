import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "src/assets/*"),
          dest: "./assets",
        },
      ],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Aveners-Secret-Wars",
      formats: ["es", "umd"],
      fileName: (format) => `avengers-secret-wars.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          classnames: "classNames",
        },
      },
    },
  },
  css: {
    modules: {
      generateScopedName: (name, file) => {
        const componentName = path.basename(path.dirname(file));
        return `avengers-${componentName.toLowerCase()}--${name}`;
      },
    },
  },
});

import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const srcDir = resolve(__dirname, "src");
const pages = readdirSync(srcDir)
  .filter((file) => file.endsWith(".html"))
  .reduce((entries, file) => {
    const name = file.replace(".html", "");
    entries[name] = resolve(srcDir, file);
    return entries;
  }, {});

export default defineConfig({
  base: "/responsive-site/",
  plugins: [tailwindcss()],
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: pages,
    },
  },
});

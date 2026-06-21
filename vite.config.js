import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const htmlFiles = readdirSync(resolve(__dirname, "src")).filter((file) =>
  file.endsWith(".html"),
);

export default defineConfig({
  plugins: [tailwindcss()],
  root: "src",
});

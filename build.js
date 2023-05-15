import esbuild from "esbuild"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const src = path.join(__dirname, "src")
const dist = path.join(__dirname, "dist")

esbuild.build({
  entryPoints: [path.join(src, "main.ts")],
  outfile: path.join(dist, "main.js"),
  target: "es2015",
  format: "esm"
})
import { copyFile, mkdir } from "node:fs/promises"
import path from "node:path"

const distDir = path.resolve("dist")
const indexPath = path.join(distDir, "index.html")

const routes = [
  "reiki",
  "sound",
  "workshops",
  "corporate",
  "hospitality",
  "gift",
  "our-story",
  "feedback",
]

async function generateFallbacks() {
  for (const route of routes) {
    const routeDir = path.join(distDir, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(indexPath, path.join(routeDir, "index.html"))
  }

  await copyFile(indexPath, path.join(distDir, "404.html"))
}

generateFallbacks().catch((error) => {
  console.error("Failed to generate SPA fallback pages", error)
  process.exit(1)
})

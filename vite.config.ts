import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Repo: bendimitri/SiteGaby → https://bendimitri.github.io/SiteGaby/ */
const repoBase = '/SiteGaby/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // Em produção (GitHub Pages) usa o path do repo; em dev fica na raiz.
  base: command === 'build' ? repoBase : '/',
  server: {
    port: 5188,
    host: true,
  },
}))

/** Prefixo do GitHub Pages (`/SiteGaby/` no build). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\.\//, '').replace(/^\//, '')
  return `${base}${clean}`
}

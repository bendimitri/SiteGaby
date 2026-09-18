import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { products, type Product } from '../data'

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_10px_30px_-18px_rgba(42,31,51,0.35)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold leading-snug text-ink">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-mute">{product.blurb}</p>
          </div>
          {product.price ? (
            <p className="shrink-0 text-base font-semibold text-ink">{product.price}</p>
          ) : null}
        </div>

        <motion.a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-pink text-sm font-semibold text-white transition-colors hover:bg-pink-deep"
          whileTap={{ scale: 0.98 }}
        >
          Ver produto
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Products() {
  return (
    <section className="mt-12 lg:mt-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}

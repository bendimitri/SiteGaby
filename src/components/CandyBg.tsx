import { motion } from 'motion/react'

export default function AmbientBg() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-pink/20 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-lilac/20 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

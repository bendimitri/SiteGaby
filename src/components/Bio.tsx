import { motion } from 'motion/react'
import { profile } from '../data'

export default function Bio() {
  return (
    <motion.section
      className="text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-pink/40 ring-offset-4 ring-offset-canvas lg:mx-0"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.05 }}
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-full w-full object-cover object-[center_18%]"
        />
      </motion.div>

      <h1 className="font-display mt-6 text-[1.65rem] font-semibold tracking-tight text-ink sm:text-3xl">
        {profile.name}
      </h1>

      <p className="mt-3 mx-auto max-w-sm whitespace-pre-line text-[0.95rem] leading-relaxed text-mute lg:mx-0">
        {profile.bio}
      </p>
    </motion.section>
  )
}

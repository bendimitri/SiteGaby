import { motion } from 'motion/react'
import { profile, socials } from '../data'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M14.2 3c.4 2.6 1.8 4.4 4.3 4.8v3.1c-1.5 0-2.9-.5-4.2-1.3v6.6c0 3.6-2.8 6.3-6.5 6.3S1.3 19.8 1.3 16.2c0-3.5 2.8-6.3 6.4-6.3.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.3-1.2-.3-1.8 0-3.2 1.5-3.2 3.2s1.4 3.3 3.3 3.3 3.2-1.5 3.2-3.3V3h3.2Z" />
    </svg>
  )
}

const icons = {
  tiktok: TikTokIcon,
}

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

      <div className="mt-6 flex justify-center gap-2.5 lg:justify-start">
        {socials.map((social, i) => {
          const Icon = icons[social.id as keyof typeof icons]
          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink shadow-sm transition-colors hover:border-pink/50 hover:text-pink-deep"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ delay: 0.2 + i * 0.06, type: 'spring', stiffness: 380, damping: 22 }}
            >
              {Icon ? <Icon /> : null}
              {social.label}
            </motion.a>
          )
        })}
      </div>
    </motion.section>
  )
}

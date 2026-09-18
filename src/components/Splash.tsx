import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data'

const STORAGE_KEY = 'gaby-splash-v2'

type SplashProps = {
  onDone: () => void
}

export default function Splash({ onDone }: SplashProps) {
  const reduce = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (reduce) {
      localStorage.setItem(STORAGE_KEY, '1')
      onDone()
      return () => {
        document.body.style.overflow = prev
      }
    }

    const start = performance.now()
    const duration = 2000
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        localStorage.setItem(STORAGE_KEY, '1')
        window.setTimeout(onDone, 180)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = prev
    }
  }, [onDone, reduce])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f4a8c4]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <img
        src="./splash-gaby.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f33]/70 via-[#2a1f33]/25 to-transparent" />

      <motion.div
        className="relative z-10 mx-5 w-full max-w-xs rounded-2xl border border-white/40 bg-white/90 p-6 text-center shadow-xl backdrop-blur-md"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 24, delay: 0.1 }}
      >
        <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-pink/40">
          <img src={profile.avatar} alt="" className="h-full w-full object-cover object-[center_18%]" />
        </div>
        <p className="font-display mt-4 text-lg font-semibold text-ink">{profile.name}</p>
        <p className="mt-1 text-sm text-mute">carregando links…</p>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full rounded-full bg-pink"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 180, damping: 26 }}
          />
        </div>

        <button
          type="button"
          className="mt-4 text-xs font-medium text-mute underline underline-offset-4"
          onClick={() => {
            localStorage.setItem(STORAGE_KEY, '1')
            onDone()
          }}
        >
          pular
        </button>
      </motion.div>
    </motion.div>
  )
}

export function shouldShowSplash() {
  if (typeof window === 'undefined') return true
  const force = new URLSearchParams(window.location.search).get('splash') === '1'
  if (force) return true
  return localStorage.getItem(STORAGE_KEY) !== '1'
}

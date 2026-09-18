import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import AmbientBg from './components/CandyBg'
import Splash, { shouldShowSplash } from './components/Splash'
import Bio from './components/Bio'
import Products from './components/Products'

export default function App() {
  const [splash, setSplash] = useState(shouldShowSplash)
  const hideSplash = useCallback(() => setSplash(false), [])

  return (
    <div className="page-bg relative min-h-dvh overflow-x-hidden">
      <AmbientBg />

      <AnimatePresence>{splash ? <Splash onDone={hideSplash} /> : null}</AnimatePresence>

      <motion.main
        className="relative mx-auto w-full max-w-5xl px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]"
        initial={false}
        animate={splash ? { opacity: 0.15 } : { opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-8">
            <Bio />
          </div>
          <Products />
        </div>

        <motion.footer
          className="mt-14 border-t border-line pt-6 text-center text-xs text-mute"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© {profileYear()} · https.user.gaby</p>
        </motion.footer>
      </motion.main>
    </div>
  )
}

function profileYear() {
  return new Date().getFullYear()
}

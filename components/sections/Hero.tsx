'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
}

export default function Hero() {
  const titleText = "Mustejab Khan"
  const subtitleText = "Quality Assurance Engineer | Automation | Performance"

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background gradient orb */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-neon-cyan to-neon-violet opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-neon-violet to-neon-cyan opacity-20 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title with letter-by-letter animation */}
        <motion.div className="mb-6" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
            {titleText.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                className="inline-block neon-glow"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div className="mb-12" variants={itemVariants}>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
            {subtitleText.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i + titleText.length}
                variants={textVariants}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed"
          variants={itemVariants}
        >
          With 5+ years of experience in quality assurance, automation, and performance testing,
          I help teams build robust, scalable systems. Currently leading QA initiatives at
          Dassault Systèmes on enterprise healthcare platforms.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-6 items-center"
          variants={itemVariants}
        >
          <Link href="#projects">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 24px rgba(34, 211, 238, 0.18)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </motion.button>
          </Link>

          <Link href="#contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                background: 'rgba(34, 211, 238, 0.06)',
                borderColor: 'rgba(34, 211, 238, 0.24)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-neon-cyan rounded-full"
              animate={{ y: [0, 6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

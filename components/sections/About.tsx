'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 neon-glow">
            About
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-violet rounded" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed mb-8"
            >
              I'm a <span className="text-neon-cyan font-semibold">Results-oriented QA Engineer</span> with
              over 5 years of hands-on experience in automation, API testing, performance testing, and CI/CD
              pipelines. Currently leading QA initiatives at
              <span className="text-neon-violet font-semibold"> Dassault Systèmes</span>, where I drive
              quality and innovation for enterprise healthcare platforms.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed mb-8"
            >
              My expertise spans across testing frameworks, automation strategies, performance optimization,
              and team collaboration. I'm passionate about building <span className="text-neon-cyan font-semibold">scalable testing solutions</span> that
              improve product quality while reducing time-to-market.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              Beyond technical skills, I thrive in collaborative environments where continuous learning and
              knowledge sharing drive team excellence. Let's build something great together.
            </motion.p>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="glass glass-hover rounded-2xl p-8 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl text-neon-cyan font-bold mt-1">→</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">5+ Years Experience</h3>
                  <p className="text-slate-400">In QA, Automation, and Performance Testing</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl text-neon-violet font-bold mt-1">→</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Team Lead</h3>
                  <p className="text-slate-400">At Dassault Systèmes Enterprise Solutions</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl text-neon-cyan font-bold mt-1">→</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Full Stack QA</h3>
                  <p className="text-slate-400">From automation to CI/CD and performance optimization</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Contact() {
  const contactText = "Let's Create Something Great"

  return (
    <section id="contact" className="relative py-20 px-6 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-neon-violet/5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-neon-cyan to-transparent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Title with letter animation */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            {contactText.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                className="inline-block neon-glow"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-violet rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in
          mind, want to discuss QA strategies, or just want to connect - I'd love to hear from you.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Email */}
          <motion.div
            className="glass glass-hover rounded-2xl p-8 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 18px 36px rgba(34, 211, 238, 0.12)',
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl text-neon-cyan">✉</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <Link
                  href="mailto:mustejab@example.com"
                  className="text-neon-cyan hover:text-neon-violet transition-colors font-mono text-sm break-all"
                >
                  mustejab@example.com
                </Link>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Get in touch via email for project inquiries or collaboration opportunities.</p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="glass glass-hover rounded-2xl p-8 group cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 18px 36px rgba(34, 211, 238, 0.12)',
            }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl text-neon-violet">in</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <Link
                  href="https://linkedin.com/in/mustejab-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-violet hover:text-neon-cyan transition-colors font-mono text-sm"
                >
                  /in/mustejab-khan →
                </Link>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Connect with me on LinkedIn to view my professional profile and experience.</p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-wrap gap-6 justify-center md:justify-start"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link href="mailto:mustejab@example.com">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Send Email
            </motion.button>
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="border-t border-slate-700/50 mt-16 pt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-slate-400 mb-4">Built with Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
          <p className="text-slate-500 text-sm">© 2024 Mustejab Khan. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            {[
              { name: 'GitHub', url: 'https://github.com/KhanMustejab', icon: '⚙' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/mustejab-khan', icon: 'in' },
              { name: 'Email', url: 'mailto:mustejab@example.com', icon: '✉' },
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 hover:border-neon-cyan/50 flex items-center justify-center text-neon-cyan hover:text-neon-violet transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: 'R&D QA Engineer Specialist & Team Lead',
    company: 'Dassault Systèmes',
    period: '2023 – Present',
    description:
      'Leading quality assurance initiatives and innovation on enterprise healthcare platforms. Driving automation strategy and mentoring team members.',
    responsibilities: [
      'Lead QA team and define testing strategies for enterprise healthcare products',
      'Develop and maintain comprehensive automation frameworks using Selenium and Python',
      'Implement performance testing and optimization achieving 25% latency improvement',
      'Design and manage CI/CD pipelines using GitLab CI for continuous quality assurance',
      'Mentor junior QA engineers and drive knowledge sharing within the team',
      'Collaborate with product and engineering teams on quality roadmap',
    ],
  },
  {
    title: 'R&D QA Engineer',
    company: 'Dassault Systèmes',
    period: '2020 – 2023',
    description:
      'Responsible for comprehensive testing of enterprise applications. Built automation frameworks and conducted API and performance testing.',
    responsibilities: [
      'Designed and implemented automated test suites for web and API applications',
      'Conducted API testing using Postman and developed custom REST API automation',
      'Performed load and stress testing using JMeter and K6 for application optimization',
      'Collaborated with development teams to identify and resolve product defects',
      'Implemented continuous integration testing in GitLab CI pipelines',
      'Created comprehensive test documentation and test reports',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-6 md:py-32">
      {/* Background accent */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-neon-cyan to-transparent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 neon-glow">
            Experience
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-violet rounded" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-cyan transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className={`relative pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'}`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full transform -translate-x-1.5 md:-translate-x-1/2 md:transform z-20 ring-4 ring-slate-900"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content Card */}
                <motion.div
                  className="glass glass-hover rounded-2xl p-6 md:p-8"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className={idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-neon-cyan font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {exp.company}
                    </motion.p>
                    <motion.span
                      className="inline-block text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className={`space-y-3 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.responsibilities.map((resp, respIdx) => (
                      <motion.div
                        key={respIdx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + respIdx * 0.1 }}
                      >
                        <span className="text-neon-violet font-bold flex-shrink-0 mt-1">✓</span>
                        <span className="text-slate-400 text-sm">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

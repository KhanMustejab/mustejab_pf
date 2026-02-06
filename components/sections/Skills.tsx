'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'QA & Testing',
    skills: ['Manual Testing', 'Automation Testing', 'Agile/Scrum', 'SDLC', 'Test Planning', 'UAT'],
  },
  {
    title: 'Automation & Performance',
    skills: ['Selenium', 'JMeter', 'K6', 'Cypress', 'API Testing', 'Load Testing'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'API & Monitoring',
    skills: ['Postman', 'Insomnia', 'Grafana', 'Sumo Logic', 'ELK Stack', 'Prometheus'],
  },
  {
    title: 'CI/CD & Tools',
    skills: ['GitLab CI', 'Git', 'Docker', 'Jenkins', 'AmazonQ', 'GitHub Copilot'],
  },
  {
    title: 'AI & Emerging Tech',
    skills: ['Gemini AI', 'ChatGPT', 'Claude', 'AI-assisted Testing', 'Prompt Engineering', 'Automation'],
  },
]

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 md:py-32">
      {/* Background accent */}
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gradient-to-tl from-neon-violet to-transparent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 neon-glow">
            Skills & Expertise
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-violet rounded" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass glass-hover rounded-2xl p-6 group cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 18px 36px rgba(34, 211, 238, 0.12)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-neon-cyan transition-colors duration-300">
                {category.title}
              </h3>

              {/* Category Accent Line */}
              <div className="h-0.5 w-12 bg-gradient-to-r from-neon-cyan to-neon-violet mb-6 group-hover:w-full transition-all duration-300" />

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={skillVariants}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-2 bg-gradient-to-br from-neon-cyan/10 to-neon-violet/10 border border-neon-cyan/20 rounded-lg text-sm font-medium text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl bg-gradient-to-br from-neon-cyan to-neon-violet" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent text */}
        <motion.p
          className="text-center text-slate-400 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          These technologies represent my core competencies. I'm continuously learning and adapting to new tools
          and frameworks to stay ahead in the rapidly evolving QA landscape.
        </motion.p>
      </div>
    </section>
  )
}

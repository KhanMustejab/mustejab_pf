'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  impact: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Enterprise Healthcare Platform QA',
    description:
      'Led comprehensive QA initiatives for a large-scale enterprise healthcare platform serving hundreds of healthcare providers across multiple regions.',
    impact: 'Implemented automated testing frameworks that increased test coverage by 60% and reduced regression testing time from 5 days to 2 days.',
    technologies: ['Selenium', 'Python', 'Postman', 'JMeter', 'GitLab CI', 'Docker'],
  },
  {
    title: 'Performance Optimization Initiative',
    description:
      'Conducted extensive performance testing and bottleneck analysis on mission-critical healthcare applications serving millions of transactions daily.',
    impact:
      'Achieved 25% latency improvement and 40% reduction in API response times, directly improving user experience and system reliability.',
    technologies: ['JMeter', 'K6', 'Grafana', 'Sumo Logic', 'Python', 'SQL'],
  },
  {
    title: 'AI-Assisted Automation Framework',
    description:
      'Designed and developed next-generation test automation framework leveraging AI technologies like GitHub Copilot and Claude for intelligent test generation.',
    impact:
      'Reduced test creation time by 50% and improved test maintenance through AI-powered code suggestions and anomaly detection.',
    technologies: ['Python', 'Selenium', 'Cypress', 'GitHub Copilot', 'Claude AI', 'JavaScript'],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 md:py-32">
      {/* Background accent */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-neon-violet to-transparent opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 neon-glow">
            Featured Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-violet rounded" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="glass glass-hover rounded-2xl p-8 relative h-full flex flex-col">
                {/* Index */}
                <div className="text-6xl font-black text-neon-cyan/10 mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-6 p-4 bg-gradient-to-r from-neon-cyan/10 to-neon-violet/10 border border-neon-cyan/20 rounded-lg">
                  <p className="text-sm font-semibold text-neon-cyan mb-2">Impact:</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <motion.span
                      key={techIdx}
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-cyan/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-slate-400 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          These projects demonstrate my ability to lead complex QA initiatives, optimize system performance,
          and leverage modern technologies to deliver measurable business impact.
        </motion.p>
      </div>
    </section>
  )
}

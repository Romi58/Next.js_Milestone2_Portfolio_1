'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiJavascript, SiNextdotjs } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: FaHtml5, percentage: 90 },
  { name: 'CSS', icon: FaCss3Alt, percentage: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, percentage: 80 },
  { name: 'JavaScript', icon: SiJavascript, percentage: 85 },
  { name: 'TypeScript', icon: SiTypescript, percentage: 75 },
  { name: 'React', icon: FaReact, percentage: 80 },
  { name: 'Next.js', icon: SiNextdotjs, percentage: 75 },
  { name: 'Python', icon: FaPython, percentage: 70 },
  { name: 'Figma', icon: FaFigma, percentage: 65 },
]

export default function Skills() {
  return (
    <div className="page-content">
      <Image
        src="/images/skills-bg.jpg"
        alt="Skills Background"
        fill
        className="page-background"
      />
      <div className="container">
        <motion.h1 
          className="heading-responsive font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <skill.icon className="skill-icon" />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


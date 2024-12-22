'use client'

import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { skillsData, incubationCenters } from '../data/skillsData'

export default function Skills() {
  return (
    <div className="min-h-screen py-24 px-4 bg-gray-900 bg-opacity-80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Skills & Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-white">Incubation Centers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {incubationCenters.map((center, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{center.name}</h3>
              <p className="text-gray-300">{center.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}


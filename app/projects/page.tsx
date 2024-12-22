'use client'

import { motion } from 'framer-motion'
import PokemonCard from '../components/PokemonCard'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  return (
    <div className="min-h-screen py-24 px-4 bg-gray-900 bg-opacity-80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <PokemonCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}


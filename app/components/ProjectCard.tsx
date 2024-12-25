import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    name: string
    description: string
    image: string
    link: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
          >
            View Project
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}


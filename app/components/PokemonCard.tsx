import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface PokemonCardProps {
  project: {
    name: string
    description: string
    image: string
    link: string
    type: string
  }
  index: number
}

export default function PokemonCard({ project, index }: PokemonCardProps) {
  const typeColors: { [key: string]: string } = {
    HTML: 'bg-red-500',
    CSS: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    React: 'bg-cyan-500',
    NextJS: 'bg-black',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
    >
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <span className={`${typeColors[project.type]} text-white px-2 py-1 rounded-full text-sm`}>
              {project.type}
            </span>
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
        </div>
      </div>
    </motion.div>
  )
}


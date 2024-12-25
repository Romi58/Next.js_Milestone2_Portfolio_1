import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface SkillCardProps {
  skill: {
    name: string
    icon: IconType
    color: string
  }
  index: number
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl"
    >
      <skill.icon className={`text-5xl mb-4 mx-auto ${skill.color}`} />
      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
    </motion.div>
  )
}


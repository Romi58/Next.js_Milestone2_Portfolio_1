import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  testimonial: {
    quote: string
    name: string
    position: string
    avatar: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-gray-400">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.quote}"</p>
    </motion.div>
  )
}


'use client'

import { motion } from 'framer-motion'
import TestimonialCard from '../components/TestimonialCard'
import { testimonialsData } from '../data/testimonialsData'

export default function Testimonials() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}


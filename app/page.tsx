'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [text, setText] = useState('Frontend Developer')
  const roles = ['Frontend Developer', 'Python Developer', 'Graphics Designer', 'B2B Sales Expert']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setText(roles[roleIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setText(roles[roleIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      } else {
        setIsDeleting(true)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50"></div>
        <Image
          src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white shadow-text"
        >
          Romaisa Hanif
        </motion.h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 h-16 text-blue-200 shadow-text">
          {text}
          <span className="animate-blink">|</span>
        </h2>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/avatar.jpg"
            alt="Romaisa Hanif"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-200 shadow-text"
        >
          Passionate about creating beautiful and functional web applications. Experienced in frontend development,
          Python programming, graphic design, and B2B sales.
        </motion.p>
        <Link href="https://milestone-1-2-resume-builder.vercel.app/" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
          >
            View Resume
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}


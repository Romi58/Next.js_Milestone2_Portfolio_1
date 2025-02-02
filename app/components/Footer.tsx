"use client"

import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="container footer-content">
        <motion.p
          className="footer-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Romaisa Hanif. All rights reserved.
        </motion.p>
        <motion.div
          className="footer-links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://github.com/Romi58" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:your.email@example.com" className="footer-link">
            <FaEnvelope size={28} />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer


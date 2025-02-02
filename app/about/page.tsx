import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="page-content relative">
      <Image
        src="/images/about-bg.jpg"
        alt="About Background"
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
          About Me
        </motion.h1>
        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/about-me.jpg"
              alt="Romaisa Hanif"
              width={400}
              height={400}
              className="about-image"
            />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-responsive mb-4">
              Hi, I'm Romaisa Hanif, a passionate frontend developer, Python enthusiast, and graphics designer. With a keen eye for detail and a love for creating beautiful, functional websites, I strive to bring ideas to life through code and design.
            </p>
            <p className="text-responsive mb-4">
              My journey in the world of technology has led me to explore various aspects of software development, from crafting intuitive user interfaces to building robust backend systems. I'm always eager to learn new technologies and improve my skills.
            </p>
            <p className="text-responsive">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


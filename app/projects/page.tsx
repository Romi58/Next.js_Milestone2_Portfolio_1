"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: "hackathon-ui-ux",
    title: "Hackathon UI/UX",
    description: "A user interface and experience design project for a hackathon event.",
    image: "/p_q.png",
    link: "https://github.com/Romi58/hakathon_UI_UX",
  },
  {
    id: "html-css-project",
    title: "HTML/CSS Project",
    description: "A showcase of HTML and CSS skills with responsive design.",
    image: "/p_2.jpg",
    link: "https://github.com/Romi58/HTML_CSS_",
  },
  {
    id: "dynamic-resume-builder",
    title: "Dynamic Resume Builder",
    description: "An application to create dynamic and personalized resumes.",
    image: "/p_3.jpg",
    link: "https://github.com/Romi58/dynamic-resume-builder",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description: "A comprehensive system for managing student information and records.",
    image: "/p_4.webp",
    link: "https://github.com/Romi58/student-management-system",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "A tool for converting between different currencies with real-time rates.",
    image: "/p_7.jpg",
    link: "https://github.com/Romi58/currency-converter",
  },
  {
    id: "oop-project",
    title: "OOP Project",
    description: "An object-oriented programming project showcasing advanced concepts.",
    image: "/p_6.png",
    link: "https://github.com/Romi58/project10_oop.git",
  },
]

export default function Projects() {
  return (
    <div className="page-content relative">
      <Image src="/pic_3.webp" alt="Projects Background" fill className="page-background" />
      <div className="container">
        <motion.h1
          className="heading-responsive font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="project-card"
            >
              <div className="project-image-container">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <Link href={`/projects/${project.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


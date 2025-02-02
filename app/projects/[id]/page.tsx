"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { use } from "react"

// This would typically come from a database or API
const projects = [
  {
    id: "hackathon-ui-ux",
    title: "Hackathon UI/UX",
    description: "A user interface and experience design project for a hackathon event.",
    image: "/p_q.png",
    details:
      "This project focused on creating an intuitive and engaging user interface for a hackathon event. The design prioritizes ease of navigation and clear information presentation, enhancing the overall user experience for participants. We incorporated modern design trends and ensured accessibility for all users.",
    technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
    link: "https://github.com/Romi58/hakathon_UI_UX",
  },
  {
    id: "html-css-project",
    title: "HTML/CSS Project",
    description: "A showcase of HTML and CSS skills with responsive design.",
    image: "/p_2.jpg",
    details:
      "This project demonstrates proficiency in HTML and CSS, featuring a responsive design that adapts seamlessly to various screen sizes. It includes modern CSS techniques such as Flexbox and Grid, and follows best practices for web accessibility. The project also incorporates CSS animations and transitions for a more engaging user experience.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
    link: "https://github.com/Romi58/HTML_CSS_",
  },
  {
    id: "dynamic-resume-builder",
    title: "Dynamic Resume Builder",
    description: "An application to create dynamic and personalized resumes.",
    image: "/p_3.jpg",
    details:
      "The Dynamic Resume Builder is a web application that allows users to create professional, customized resumes with ease. It features a user-friendly interface, multiple template options, and the ability to export resumes in various formats. The app uses modern web technologies to provide a smooth, interactive experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PDF Generation"],
    link: "https://github.com/Romi58/dynamic-resume-builder",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description: "A comprehensive system for managing student information and records.",
    image: "/p_4.webp",
    details:
      "This Student Management System is a robust application designed to streamline administrative tasks in educational institutions. It includes features such as student enrollment, attendance tracking, grade management, and report generation. The system is built with scalability and security in mind, ensuring efficient management of large volumes of student data.",
    technologies: ["Python", "Django", "PostgreSQL", "RESTful API", "JWT Authentication"],
    link: "https://github.com/Romi58/student-management-system",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "A tool for converting between different currencies with real-time rates.",
    image: "/p_7.jpg",
    details:
      "The Currency Converter is a web application that provides real-time currency conversion rates. It features an intuitive interface, supports a wide range of currencies, and offers historical rate charts. The app integrates with a reliable currency API to ensure accurate and up-to-date conversion rates.",
    technologies: ["JavaScript", "React", "Chart.js", "Currency API Integration", "Responsive Design"],
    link: "https://github.com/Romi58/currency-converter",
  },
  {
    id: "oop-project",
    title: "OOP Project",
    description: "An object-oriented programming project showcasing advanced concepts.",
    image: "/p_6.png",
    details:
      "This Object-Oriented Programming (OOP) project demonstrates advanced OOP concepts such as inheritance, polymorphism, encapsulation, and abstraction. It includes a complex system architecture, showcasing how OOP principles can be applied to create scalable and maintainable software solutions.",
    technologies: ["Java", "Design Patterns", "UML", "JUnit Testing", "Maven"],
    link: "https://github.com/Romi58/project10_oop.git",
  },
]

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const project = projects.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="page-content">
      <Image src="/pic_3.webp" alt="Project Background" fill className="page-background" />
      <div className="container">
        <motion.div
          className="project-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="heading-responsive font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="project-image-container"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="project-image mb-6"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="project-content"
          >
            <p className="text-responsive mb-4">{project.description}</p>
            <p className="text-responsive mb-6">{project.details}</p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
              <ul className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="technology-item"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View on GitHub
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                Back to Projects
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

